import React, { useState } from "react";
import { useCadastrarProduto } from "../../hooks/useCadastrarProduto";
import "./styles.css";

function CadastrarProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const { cadastrarNovoProduto, cadastroStatus } = useCadastrarProduto();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProduto = {
      nome,
      preco,
      descricao,
      quantidade,
      dtCadastro: new Date().toISOString(),
    };
    await cadastrarNovoProduto(novoProduto);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Preço:
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Quantidade:
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Descrição:
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="form-input"
          />
        </label>
        
        
        <button
          type="submit"
          disabled={cadastroStatus === "loading"}
          className="form-button"
        >
          {cadastroStatus === "loading" ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
      {cadastroStatus === "success" && <p>Produto cadastrado com sucesso!</p>}
      {cadastroStatus === "error" && <p>Erro ao cadastrar produto.</p>}
    </div>
  );
}

export default CadastrarProduto;