"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Presentation,
  X,
} from "lucide-react";
import { PRESENTATION_STEPS } from "@/lib/presentation";
import { cn } from "@/lib/utils";

export default function PresentationMode() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [intro, setIntro] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const focusStep = useCallback((index: number) => {
    const current = PRESENTATION_STEPS[index];
    if (!current) return;

    document.querySelectorAll<HTMLElement>("[data-present-section]").forEach((el) => {
      const on = el.dataset.presentSection === current.id;
      el.classList.toggle("present-spotlight", on);
      el.classList.toggle("present-dimmed", !on);
    });

    const target = document.getElementById(current.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    window.dispatchEvent(
      new CustomEvent("presentation-step", { detail: { id: current.id, index } })
    );
  }, []);

  const stop = useCallback(() => {
    clearTimer();
    setActive(false);
    setPaused(false);
    setIntro(false);
    setStep(0);
    document.body.classList.remove("presentation-active");
    document.querySelectorAll<HTMLElement>("[data-present-section]").forEach((el) => {
      el.classList.remove("present-spotlight", "present-dimmed");
    });
  }, []);

  const start = () => {
    clearTimer();
    setActive(true);
    setPaused(false);
    setIntro(true);
    setStep(0);
    document.body.classList.add("presentation-active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    timerRef.current = setTimeout(() => {
      setIntro(false);
      focusStep(0);
    }, 2200);
  };

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= PRESENTATION_STEPS.length) {
        stop();
        return;
      }
      clearTimer();
      setIntro(false);
      setStep(index);
      focusStep(index);
    },
    [focusStep, stop]
  );

  // Auto-advance
  useEffect(() => {
    if (!active || paused || intro) return;
    clearTimer();
    const hold = PRESENTATION_STEPS[step]?.holdMs ?? 5000;
    timerRef.current = setTimeout(() => {
      if (step >= PRESENTATION_STEPS.length - 1) {
        stop();
      } else {
        goTo(step + 1);
      }
    }, hold);
    return clearTimer;
  }, [active, paused, intro, step, goTo, stop]);

  // Cleanup on unmount
  useEffect(() => () => stop(), [stop]);

  // Keyboard controls
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") stop();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goTo(step + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(Math.max(0, step - 1));
      }
      if (e.key === "p" || e.key === "P") setPaused((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step, goTo, stop]);

  const current = PRESENTATION_STEPS[step];
  const progress = active
    ? intro
      ? 4
      : ((step + 1) / PRESENTATION_STEPS.length) * 100
    : 0;

  return (
    <>
      {/* Botón principal */}
      {!active && (
        <button
          type="button"
          onClick={start}
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-700 via-teal-600 to-sky-700 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-teal-900/25 transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-300 animate-soft-pulse-ring sm:bottom-7 sm:right-7"
        >
          <Presentation className="h-4 w-4 transition group-hover:rotate-[-8deg]" />
          Presentación
          <span className="hidden rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:inline">
            Épica
          </span>
        </button>
      )}

      {/* Overlay de presentación */}
      {active && (
        <div className="pointer-events-none fixed inset-0 z-40">
          <div className="present-veil absolute inset-0" />

          {/* Intro cinematográfico */}
          {intro && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="present-intro-card mx-4 max-w-xl rounded-3xl border border-white/15 bg-gradient-to-br from-teal-900/90 via-slate-900/90 to-sky-950/90 px-8 py-10 text-center text-white shadow-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200">
                  Fondo de Contingencia
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Presentación de Resultados
                </h2>
                <p className="mt-3 text-sm text-teal-100/85">
                  Ahorro municipal · impacto clínico · rendición de cuentas
                </p>
              </div>
            </div>
          )}

          {/* Título del paso actual */}
          {!intro && current && (
            <div className="pointer-events-none absolute left-1/2 top-6 w-[min(92vw,36rem)] -translate-x-1/2">
              <div className="present-step-title rounded-2xl border border-white/15 bg-slate-950/75 px-5 py-3 text-center text-white shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                  {step + 1} / {PRESENTATION_STEPS.length} · {current.label}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {current.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Controles */}
          <div className="pointer-events-auto absolute bottom-5 left-1/2 flex w-[min(96vw,34rem)] -translate-x-1/2 flex-col gap-2 sm:bottom-7">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 transition-[width] duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/15 bg-slate-950/80 px-3 py-2 text-white shadow-2xl backdrop-blur-md">
              <button
                type="button"
                onClick={() => goTo(Math.max(0, step - 1))}
                disabled={intro || step === 0}
                className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold transition hover:bg-white/10 disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
                Ant
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold transition hover:bg-white/15"
                >
                  {paused ? (
                    <>
                      <Play className="h-3.5 w-3.5" /> Continuar
                    </>
                  ) : (
                    <>
                      <Pause className="h-3.5 w-3.5" /> Pausar
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={stop}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
                >
                  <X className="h-3.5 w-3.5" />
                  Salir
                </button>
              </div>

              <button
                type="button"
                onClick={() => goTo(step + 1)}
                className="inline-flex items-center gap-1 rounded-xl bg-teal-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-teal-400"
              >
                Sig
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
