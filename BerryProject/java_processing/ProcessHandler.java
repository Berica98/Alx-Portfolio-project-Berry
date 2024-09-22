public class ProcessHandler {

    public String processTransactionData(String transactionDetails) {
        return "Processed transaction: " + transactionDetails;
    }

    public static void main(String[] args) {
        ProcessHandler handler = new ProcessHandler();
        System.out.println(handler.processTransactionData("Sample Transaction"));
    }
}
