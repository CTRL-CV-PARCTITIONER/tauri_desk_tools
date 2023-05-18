// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use std::process::{Command, Stdio};
use std::io::{BufRead, BufReader};

#[tauri::command]
fn excute_python(start: String, end: String) {
    let mut output = Command::new("python")
        .arg("../python_loader/main.py")
        .arg("--start")
        .arg(start)
        .arg("--end")
        .arg(end)
        .stdout(Stdio::piped())
        .spawn()
        .expect("Failed to execute command");

    if let Some(stdout) = output.stdout.take() {
        let reader = BufReader::new(stdout);
        for line in reader.lines() {
            if let Ok(line) = line {
                println!("{}", line);
            }
        }
    }

    let exit_status = output.wait().expect("Failed to wait for child process");
    if !exit_status.success() {
        eprintln!("Error executing Python script");
    }
}


fn main() {
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![excute_python])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }