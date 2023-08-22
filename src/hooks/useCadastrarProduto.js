import { useState } from "react";
import { cadastrarProduto } from "../services/api";

function useCadastrarProduto() {
  const [cadastroStatus, setCadastroStatus] = useState("idle");

  async function cadastrarNovoProduto(novoProduto) {
    try {
      setCadastroStatus("loading");
      await cadastrarProduto(novoProduto);
      setCadastroStatus("success");
    } catch (error) {
      console.error(error);
      setCadastroStatus("error");
    }
  }

  return { cadastrarNovoProduto, cadastroStatus };
}

export { useCadastrarProduto };

