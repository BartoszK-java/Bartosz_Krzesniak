import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class FormularzWeryfikacji extends JFrame {
    private JTextField poleWieku;
    private JCheckBox zgodaCheckBox;
    private JButton zatwierdzButton;

    public FormularzWeryfikacji() {
        super("Formularz Weryfikacji");
        setLayout(new FlowLayout());

        add(new JLabel("Podaj wiek:"));
        poleWieku = new JTextField(10);
        add(poleWieku);

        zgodaCheckBox = new JCheckBox("Akceptuję regulamin");
        add(zgodaCheckBox);

        zatwierdzButton = new JButton("Zatwierdź");
        add(zatwierdzButton);

        zatwierdzButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String tekst = poleWieku.getText().trim();
                try {
                    int wiek = Integer.parseInt(tekst);
                    boolean zaakceptowano = zgodaCheckBox.isSelected();

                    if (wiek < 18) {
                        JOptionPane.showMessageDialog(null, "Kasti najpierw 18 skończ!");
                    } else if (!zaakceptowano) {
                        JOptionPane.showMessageDialog(null, "Wiem że nie chce ci się czytać regulaminu ale zaakceptuj nawet bez czytania");
                    } else {
                        JOptionPane.showMessageDialog(null, "Rejestracja pomyślna!");
                    }
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(null, "Ty chyba jakiś odklejony że wiek w ułamkach masz!");
                }
            }
        });

        setSize(300, 160);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new FormularzWeryfikacji();
            }
        });
    }
}
