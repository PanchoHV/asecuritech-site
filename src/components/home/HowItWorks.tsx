"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const sosImage =
  "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Logos%20%281%29.webp";

const steps = [
  {
    id: 1,
    title: "Notificaciones",
    label: "Central + familia",
    time: "3s",
    description: "La alerta se envía de inmediato a la central y a tus contactos clave.",
    image: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-6.webp",
    alt: "Notificaciones a central de monitoreo y familia",
    tone: "human",
  },
  {
    id: 2,
    title: "Verificación",
    label: "SentinelOS",
    time: "6s",
    description: "El sistema valida el evento y activa cámaras, alarmas o apoyos conectados.",
    image: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-7.webp",
    alt: "Verificación y activación de periféricos conectados",
    tone: "tech",
  },
  {
    id: 3,
    title: "Respuesta",
    label: "Acción coordinada",
    time: "11s",
    description: "Se coordina la reacción con seguridad, comunidad o apoyo inmediato.",
    image: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-8.webp",
    alt: "Respuesta coordinada de seguridad y apoyo inmediato",
    tone: "response",
  },
] as const;

const connectionSegments = [
  {
    id: 1,
    tone: "human",
    className: "connection1",
    path: "M500 330 C398 292 332 218 250 146",
  },
  {
    id: 2,
    tone: "tech",
    className: "connection2",
    path: "M250 146 C388 58 612 58 750 146",
  },
  {
    id: 3,
    tone: "response",
    className: "connection3",
    path: "M750 146 C710 330 652 520 500 598",
  },
] as const;

const activationTimers = [3000, 6000, 11000];
const resetDelay = 16000;

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function FlowNode({
  step,
  active,
  preview,
  running,
}: {
  step: (typeof steps)[number];
  active: boolean;
  preview: boolean;
  running: boolean;
}) {
  return (
    <motion.article
      className={classNames(
        styles.node,
        styles[`node${step.id}`],
        styles[step.tone],
        preview && styles.nodePreview,
        running && styles.nodeRunning,
        active && styles.nodeActive,
      )}
      initial={false}
      animate={{
        opacity: preview || active ? 1 : 0,
        scale: preview || active ? 1 : 0.72,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.nodeCircle}>
        <svg className={styles.nodeOrbit} viewBox="0 0 120 120" aria-hidden="true">
          <circle className={styles.nodeOrbitTrack} cx="60" cy="60" r="56" />
          <circle className={styles.nodeOrbitEnergy} cx="60" cy="60" r="56" />
        </svg>
        <img src={step.image} alt={step.alt} className={styles.nodeImage} loading="lazy" />
        <span className={styles.nodeTime}>{step.time}</span>
      </div>

      <div className={styles.nodeCopy}>
        <p className={styles.nodeLabel}>{step.label}</p>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </motion.article>
  );
}

export default function HowItWorks() {
  const reducedMotion = useReducedMotion();
  const [preview, setPreview] = useState(false);
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [runKey, setRunKey] = useState(0);

  const showNodes = preview || running || activeStep > 0;

  useEffect(() => {
    if (!running) {
      return;
    }

    if (reducedMotion) {
      setActiveStep(3);
      const resetTimer = window.setTimeout(() => {
        setRunning(false);
        setPreview(false);
        setActiveStep(0);
        setRunKey((currentKey) => currentKey + 1);
      }, 5000);

      return () => {
        window.clearTimeout(resetTimer);
      };
    }

    const timers = activationTimers.map((time, index) =>
      window.setTimeout(() => {
        setActiveStep(index + 1);
      }, time),
    );

    const resetTimer = window.setTimeout(() => {
      setRunning(false);
      setPreview(false);
      setActiveStep(0);
      setRunKey((currentKey) => currentKey + 1);
    }, resetDelay);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(resetTimer);
    };
  }, [running, reducedMotion, runKey]);

  const activateFlow = () => {
    setPreview(true);
    setRunning(false);
    setActiveStep(0);
    setRunKey((currentKey) => currentKey + 1);

    window.setTimeout(() => {
      setRunning(true);
      if (reducedMotion) {
        setActiveStep(3);
      }
    }, 40);
  };

  return (
    <section className="home-dark-section section-space overflow-hidden">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="home-section-eyebrow">¿Cómo funciona?</p>
          <h2 className="home-section-title">Del SOS a la respuesta coordinada, sin fricción.</h2>
          <p className="home-section-copy">
            Asecuritech convierte una alerta en una cadena verificable de notificación, validación y acción real.
          </p>
        </div>

        <p className={styles.flowHintTop}>
          Presiona el botón y mira cómo activamos la respuesta de tu red de ayuda en solo 11 segundos.
        </p>

        <div
          className={classNames(styles.flow, showNodes && styles.flowPreview, running && styles.flowRunning)}
        >

          <svg key={runKey} className={styles.connectionLayer} viewBox="0 0 1000 860" aria-hidden="true">
            <defs>
              <linearGradient id="howHumanPath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb35c" />
                <stop offset="100%" stopColor="#ff6b00" />
              </linearGradient>
              <linearGradient id="howTechPath" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8be8ff" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <linearGradient id="howResponsePath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7db5ff" />
                <stop offset="100%" stopColor="#0052cc" />
              </linearGradient>
              <filter id="howPathGlow" x="-35%" y="-35%" width="170%" height="170%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connectionSegments.map((segment) => (
              <path
                key={segment.id}
                d={segment.path}
                className={classNames(styles.connection, styles[segment.className])}
                stroke={`url(#${
                  segment.tone === "human"
                    ? "howHumanPath"
                    : segment.tone === "tech"
                      ? "howTechPath"
                      : "howResponsePath"
                })`}
                filter="url(#howPathGlow)"
              />
            ))}
          </svg>

          <div className={styles.centerStage}>
            <motion.button
              type="button"
              className={styles.sosButton}
              onMouseEnter={() => setPreview(true)}
              onFocus={() => setPreview(true)}
              onClick={activateFlow}
              aria-label="Activar flujo SOS de Asecuritech"
              aria-pressed={running || activeStep === 3}
              whileHover={reducedMotion ? undefined : { scale: 1.025 }}
              whileTap={reducedMotion ? undefined : { scale: 0.985 }}
            >
              <span className={styles.sosWave} />
              <span className={styles.sosWaveDelay} />
              <span className={styles.sosRing} />
              <span className={styles.sosImageWrap}>
                <img src={sosImage} alt="Botón SOS de Asecuritech" className={styles.sosImage} />
              </span>
              <span className={styles.sosStatus}>
                <span>{running ? "Desplegando red" : activeStep === 3 ? "Red activa" : "Sistema listo"}</span>
                <strong>{activeStep > 0 ? `Paso 0${activeStep}` : "SOS"}</strong>
              </span>
            </motion.button>
          </div>

          <div key={`nodes-${runKey}`} className={styles.nodesLayer}>
            {steps.map((step) => (
              <FlowNode
                key={step.id}
                step={step}
                active={activeStep >= step.id}
                preview={showNodes}
                running={running}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
