package com.example.bkrzesniak_lab03;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private Button btnImieNazwisko;
    private Button btnAdres;
    private Button btnGeo;
    private TextView tvURL;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnImieNazwisko = findViewById(R.id.btnImieNazwisko);
        btnAdres = findViewById(R.id.btnAdres);
        btnGeo = findViewById(R.id.btnGeo);
        tvURL = findViewById(R.id.tvURL);

        btnImieNazwisko.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                startActivity(intent);
            }
        });

        btnAdres.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = tvURL.getText().toString();
                Intent myIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(myIntent);
            }
        });

        btnGeo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ThirdActivity.class);
                startActivity(intent);
            }
        });
    }
}