package fr.pb.controls;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;

/**
 *
 * @author Pascal
 */
@WebServlet(name = "AlwaysDataVillesSelectJavaEE", urlPatterns = {"/AlwaysDataVillesSelectJavaEE"})
public class AlwaysDataVillesSelectJavaEE extends HttpServlet {

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/plain;charset=UTF-8");
        PrintWriter out = response.getWriter();

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
            out.print(lsb.toString());
        } catch (ClassNotFoundException | SQLException e) {
            out.println(e.getMessage());
        }

    } /// doGet

} /// main
