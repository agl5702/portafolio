import { Suspense, lazy } from "react";
import { Box } from "@chakra-ui/react";

import "./App.css";

// 🔹 Lazy Loading
const Header = lazy(() => import("./components/layout/header"));
const Home = lazy(() => import("./pages/home"));
const Tecnologias = lazy(() => import("./pages/tecnologias"));
const Proyectos = lazy(() => import("./pages/proyectos"));
const Contactos = lazy(() => import("./pages/contactos"));

function App() {
  return (
    <Box bg="black" minH="100vh" position="relative" overflow="hidden">
      {/* ATMÓSFERA GLOBAL */}
      <Box
        position="fixed"
        inset="0"
        zIndex={0}
        pointerEvents="none"
        backgroundImage={`
          radial-gradient(
            circle at 70% 20%,
            rgba(255,255,255,0.08) 0%,
            rgba(255,255,255,0.03) 25%,
            rgba(0,0,0,0) 60%
          ),

          radial-gradient(
            circle at 20% 90%,
            rgba(255,255,255,0.06) 0%,
            rgba(255,255,255,0.02) 20%,
            rgba(0,0,0,0) 50%
          )
        `}
      />

      {/* GRID GLOBAL */}
      <Box
        position="fixed"
        inset="0"
        zIndex={0}
        opacity="0.05"
        pointerEvents="none"
        backgroundImage={`
          linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
        `}
        backgroundSize="60px 60px"
      />

      {/* CONTENIDO */}
      <Box position="relative" zIndex={2}>
        <Suspense fallback={<div>Cargando...</div>}>
          <Header />
          <Home />
          <Tecnologias />
          <Proyectos />
          <Contactos />
        </Suspense>
      </Box>
    </Box>
  );
}

export default App;
