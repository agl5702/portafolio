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
    <Box bg="#050816" minH="100vh" position="relative" overflow="hidden">
      {/* ATMÓSFERA GLOBAL */}
      <Box
        position="fixed"
        inset="0"
        zIndex={0}
        pointerEvents="none"
        backgroundImage={`
          radial-gradient(
            circle at 78% 30%,
            rgba(59,130,246,0.18) 0%,
            rgba(59,130,246,0.07) 18%,
            rgba(5,8,22,0) 58%
          ),

          radial-gradient(
            circle at 10% 110%,
            rgba(168,85,247,0.15) 0%,
            rgba(168,85,247,0.06) 16%,
            rgba(5,8,22,0) 52%
          )
        `}
      />

      {/* GRID GLOBAL */}
      <Box
        position="fixed"
        inset="0"
        zIndex={0}
        opacity="0.03"
        pointerEvents="none"
        backgroundImage={`
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `}
        backgroundSize="50px 50px"
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
