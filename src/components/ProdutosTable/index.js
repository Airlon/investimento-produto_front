import React from "react";
import { useProdutos } from "../../hooks/useProdutos";
import "./styles.css";

function ProdutosTable() {
  const { produtos, loading } = useProdutos();

  const columnData = [
    { attribute: "nome", label: "Nome" },
    { attribute: "preco", label: "Preço" },
    { attribute: "quantidade", label: "Quantidade" },
    { attribute: "descricao", label: "Descrição" },
    { attribute: "dtCadastro", label: "Data de Cadastro" },
  ];

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {columnData.map((column) => (
            <th key={column.attribute}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            {columnData.map((column) => (
              <td key={column.attribute} name={column.attribute}>
                {produto[column.attribute]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProdutosTable;