package com.example.bkrzesniak_lab03;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class ThirdActivity extends AppCompatActivity {
    private Button btnStart, btnStop;
    private TextView tvSzer, tvDlug;
    public LocationManager locManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_third);

        btnStart = findViewById(R.id.btnStart);
        btnStop = findViewById(R.id.btnStop);
        tvSzer = findViewById(R.id.tvSzer);
        tvDlug = findViewById(R.id.tvDlug);

        locManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

        LocationListener listener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                String szer = String.valueOf(location.getLatitude());
                String dlug = String.valueOf(location.getLongitude());
                tvSzer.setText(szer);
                tvDlug.setText(dlug);
            }

            @Override
            public void onStatusChanged(String provider, int status, Bundle extras) {}

            @Override
            public void onProviderEnabled(String provider) {}

            @Override
            public void onProviderDisabled(String provider) {}
        };

        btnStart.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
                    locManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, listener);
                    btnStart.setEnabled(false);
                    btnStop.setEnabled(true);
                }
            }
        });

        btnStop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                locManager.removeUpdates(listener);
                btnStart.setEnabled(true);
                btnStop.setEnabled(false);
            }
        });
    }
}