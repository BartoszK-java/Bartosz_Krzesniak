import javax.swing.*;
import java.awt.*;

class EkranLogowania extends JFrame {

    public EkranLogowania() {
        super("Ekran logowania");

        setLayout(new BorderLayout(10, 10));
        JPanel panelGlowny = new JPanel();
        panelGlowny.setLayout(new GridLayout(2, 2, 5, 5));

        JLabel labelUzytkownik = new JLabel("Użytkownik:");
        JTextField poleUzytkownik = new JTextField(15);

        JLabel labelHaslo = new JLabel("Hasło:");
        JPasswordField poleHaslo = new JPasswordField(15);

        panelGlowny.add(labelUzytkownik);
        panelGlowny.add(poleUzytkownik);
        panelGlowny.add(labelHaslo);
        panelGlowny.add(poleHaslo);

        JPanel panelPrzyciski = new JPanel();
        panelPrzyciski.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));

        JButton przyciskZaloguj = new JButton("Zaloguj");
        JButton przyciskAnuluj = new JButton("Anuluj");

        panelPrzyciski.add(przyciskZaloguj);
        panelPrzyciski.add(przyciskAnuluj);

        add(panelGlowny, BorderLayout.CENTER);
        add(panelPrzyciski, BorderLayout.SOUTH);

        pack(); // dopasowuje rozmiar okna do zawartości
        setLocationRelativeTo(null); // wyśrodkowanie na ekranie
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(EkranLogowania::new);
    }
}
