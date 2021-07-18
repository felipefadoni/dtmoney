import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionTable } from "../TransactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
