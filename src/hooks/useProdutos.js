import { useEffect, useState } from "react";
import { fetchProdutos } from "../services/api";

function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProdutos() {
      try {
        const produtosData = await fetchProdutos();
        console.log("produtosData:", produtosData);
        setProdutos(produtosData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    
    getProdutos();
  }, []);

  console.log("produtos:", produtos);

  return { produtos, loading};
}

export { useProdutos };

