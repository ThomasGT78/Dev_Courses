package fr.pb.ressources;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.*;

import java.io.*;
import java.util.*;

public class CrudFiles extends AppCompatActivity implements View.OnClickListener, AdapterView.OnItemClickListener, AdapterView.OnItemSelectedListener {

    private Spinner spinnerFiles;

    private ListView listViewFiles;

    private EditText editTextRecord;

    private ImageButton imageButtonCls;
    private ImageButton imageButtonAdd;
    private ImageButton imageButtonDelete;
    private ImageButton imageButtonUpdate;

    private TextView textViewMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.crud_files);

        initInterface();
        initEvents();

        String[] tFiles = getFilesFromData();

        // --- Le spinner avec les resultats
        ArrayAdapter<String> aaResultats = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, tFiles);
        aaResultats.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        // --- Affectation de l'ArrayAdapter à la liste du spinner
        spinnerFiles.setAdapter(aaResultats);

    } /// onCreate

    /**
     *
     */
    private void initInterface() {
        spinnerFiles = findViewById(R.id.spinnerFiles);

        listViewFiles = findViewById(R.id.listViewFiles);

        editTextRecord = findViewById(R.id.editTextRecord);

        imageButtonCls = findViewById(R.id.imageButtonCls);
        imageButtonAdd = findViewById(R.id.imageButtonAdd);
        imageButtonDelete = findViewById(R.id.imageButtonDelete);
        imageButtonUpdate = findViewById(R.id.imageButtonUpdate);

        textViewMessage = findViewById(R.id.textViewmessage);

        imageButtonCls.setFocusable(true);
        imageButtonCls.setFocusableInTouchMode(true);
        imageButtonCls.requestFocus();

    } /// initInterface

    /**
     *
     */
    private void initEvents() {
        // --- Ajout d'un écouteur à la liste déroulante
        spinnerFiles.setOnItemSelectedListener(this);
        listViewFiles.setOnItemClickListener(this);
        imageButtonCls.setOnClickListener(this);
        imageButtonAdd.setOnClickListener(this);
        imageButtonDelete.setOnClickListener(this);
        imageButtonUpdate.setOnClickListener(this);
    } /// initEvents

    /**
     *
     */
    private void fillListView(String[] t) {
// Le Model au sens MVC du terme
        ArrayAdapter<String> aaListe = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, t);

        // --- Méthode de la classe Activity pour remplir la liste, la View au sens MVC
        listViewFiles.setAdapter(aaListe);
    } /// fillListView


    /**
     * @param context
     * @param psFile
     * @param psContent
     */
    private String addToFile(Context context, String psFile, String psContent) {
        String lsMessage = "";
        FileOutputStream fos;
        OutputStreamWriter osw;
        BufferedWriter bw;

        try {
            fos = context.openFileOutput(psFile, Context.MODE_APPEND);
            osw = new OutputStreamWriter(fos);
            bw = new BufferedWriter(osw);
            bw.write(psContent + "\n");

            bw.close();
            osw.close();
            fos.close();
            lsMessage = "Le fichier " + psFile + " a été modifié";
        } catch (Exception e) {
            lsMessage = e.getMessage();
        }

        return lsMessage;
    } /// putContentFile

    /**
     *
     * @param context
     * @param psFile
     * @param psRecord
     * @return
     */
    private String deleteInFile(Context context, String psFile, String psRecord) {
        String lsMessage = "";
        FileOutputStream fos;
        OutputStreamWriter osw;
        BufferedWriter bw;


        // Pas très efficace cette relecture
        String[] tRecords = getContentFile(context, psFile);
        StringBuilder lsb = new StringBuilder();
        for (int i = 0; i < tRecords.length; i++) {
            if (!tRecords[i].equals(psRecord)) {
                lsb.append(tRecords[i]);
                lsb.append("\n");
            }
        }

        try {
            fos = context.openFileOutput(psFile, Context.MODE_PRIVATE);
            osw = new OutputStreamWriter(fos);
            bw = new BufferedWriter(osw);
            bw.write(lsb.toString() + "\n");

            bw.close();
            osw.close();
            fos.close();
            lsMessage = "Le fichier " + psFile + " a été modifié";
        } catch (Exception e) {
            lsMessage = e.getMessage();
        }

        return lsMessage;
    } /// putContentFile

    /**
     * @param context
     * @param psFile
     * @return
     */
    private String[] getContentFile(Context context, String psFile) {
        List<String> recordsList = new ArrayList();

        File f;
        String lsPath = context.getFilesDir().getAbsolutePath() + "/" + psFile;
        FileInputStream fis;
        InputStreamReader isr;
        BufferedReader br;
        String lsRecord = "";

        try {
            f = new File(lsPath);
            if (f.exists()) {
                fis = context.openFileInput(psFile);
                isr = new InputStreamReader(fis);
                br = new BufferedReader(isr);

                while ((lsRecord = br.readLine()) != null) {
                    if (lsRecord.trim().length() > 0) {
                        recordsList.add(lsRecord);
                    }
                }

                br.close();
                isr.close();
                fis.close();
            } else {
                recordsList.add("Le fichier " + psFile + " n'existe pas");
            }
        } catch (FileNotFoundException e) {
            recordsList.add(e.getMessage());
        } catch (IOException e) {
            recordsList.add(e.getMessage());
        }

        return recordsList.toArray(new String[recordsList.size()]);
    } /// getContentFile

    /**
     * @return
     */
    private String[] getFilesFromData() {

        List<String> filesList = new ArrayList();
        String[] tFiles = null;

        Context context = getBaseContext();
        File dir;

        try {
            /*
             * Le dossier files donc /data/data/nom.du.package/files/
             */
            // Renvoie /data/data/fr.pb.data.fichier/files
            dir = context.getFilesDir();

            // Liste les fichiers
            tFiles = dir.list();

            for (int i = 0; i < tFiles.length; i++) {
                filesList.add(tFiles[i]);
            }
        } catch (Exception e) {
            filesList.add(e.getMessage());
        }

        tFiles = filesList.toArray(new String[filesList.size()]);
        Arrays.sort(tFiles);
        return tFiles;
    } /// getFilesFromData

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        String lsSelection = parent.getItemAtPosition(position).toString();
        //Toast.makeText(this, lsSelection, Toast.LENGTH_LONG).show();
        editTextRecord.setText(lsSelection);
        Log.e("clic", "listview");
        //textViewMessage.setText("Click ds combo");
    } /// onItemClick

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        String lsSelection = parent.getAdapter().getItem(position).toString();
        textViewMessage.setText(lsSelection);
        String[] tRecords = getContentFile(this, parent.getAdapter().getItem(position).toString());
        fillListView(tRecords);
        Log.e("clic", "combo");
    } /// onItemSelected

    @Override
    public void onNothingSelected(AdapterView<?> parent) {
        textViewMessage.setText("");
    } /// onNothingSelected

    @Override
    public void onClick(View v) {
        String lsMessage = "";
        if (v == imageButtonCls) {
            editTextRecord.setText("");
        }
        if (v == imageButtonAdd) {
            lsMessage = addToFile(this, spinnerFiles.getSelectedItem().toString(), editTextRecord.getText().toString());
        }
        if (v == imageButtonDelete) {
            lsMessage = deleteInFile(this,spinnerFiles.getSelectedItem().toString(), editTextRecord.getText().toString());

        }
        if (v == imageButtonUpdate) {

        }
        textViewMessage.setText(lsMessage);
    } /// onClick
} /// CrudFiles
