const API_URL = "http://localhost:8080/produtos";

async function fetchProdutos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar produtos da API.");
  }
}

async function cadastrarProduto(novoProduto) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoProduto),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar produto.");
    }
  } catch (error) {
    throw new Error("Erro ao cadastrar produto.");
  }
}

export { cadastrarProduto, fetchProdutos };

