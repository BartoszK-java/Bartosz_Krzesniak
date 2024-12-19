package com.example.bkrzesniak_lab03;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        TextView tvImieNazwisko = findViewById(R.id.tvImieNazwisko);
        tvImieNazwisko.setText("Bartosz Krześniak");
    }
}