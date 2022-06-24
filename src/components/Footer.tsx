import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {
  return (
    <footer className="py-6 mx-6 border-t border-gray-600 flex items-center flex-col lg:flex-row gap-6 justify-between">
      <div className="flex items-center flex-col lg:items-start xl:flex-row xl:items-center gap-4">
        <RocketseatLogo />
        <span className="text-gray-300 text-center lg:text-left xl:ml-6">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="text-gray-300 text-center lg:text-right">
        Políticas de privacidade
      </a>
    </footer>
  );
}
