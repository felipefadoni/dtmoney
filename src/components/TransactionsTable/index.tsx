import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionTable() {
  const data = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {data.transactions.map((tr) => (
            <tr key={tr.id}>
              <td>{tr.title}</td>
              <td className={tr.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(tr.amount)}
              </td>
              <td>{tr.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(tr.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
