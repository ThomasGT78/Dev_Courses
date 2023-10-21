package fr.pb.mysql;

import java.sql.*;

/**
 *
 * @author Pascal
 */
public class VillesSelectAlwaysDataJavaSE {

    public static void main(String[] args) {
        Connection cnx;

        try {
            Class.forName("com.mysql.jdbc.Driver");
            // --- Test sur une connexion et un SELECT
            String ip = "mysql-m2icdi.alwaysdata.net";
            String port = "3306";
            String db = "m2icdi_cours";
            String user = "m2icdi";
            String pwd = "mdp12345";
            cnx = DriverManager.getConnection("jdbc:mysql://" + ip + ":" + port + "/" + db, user, pwd);

            Statement lstSQL = cnx.createStatement();
            ResultSet lrs = lstSQL.executeQuery("SELECT * FROM villes");

            StringBuilder lsb = new StringBuilder();
            while (lrs.next()) {
                lsb.append(lrs.getString(1));
                lsb.append("-");
                lsb.append(lrs.getString(2));
                lsb.append("\n");
            }
            lrs.close();
            lstSQL.close();
            cnx.close();
            System.out.println(lsb.toString());
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }

    } /// main
} /// class
