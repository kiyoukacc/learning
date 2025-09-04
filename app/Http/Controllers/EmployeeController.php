<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $karyawans = Employee::all();

        return inertia('Dashboard', [
            'auth' => [
                'user' => auth()->user(),
            ],
            'karyawans' => $karyawans,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'id_pekerja' => 'required|string|max:50|unique:karyawans,id_pekerja',
            'jabatan' => 'required|string|max:100',
            'email' => 'required|email|unique:karyawans,email',
            'umur' => 'required|integer|min:18',
        ]);

        Employee::create($validated);

        return redirect()->route('dashboard')->with('success', 'Karyawan berhasil ditambahkan!');
    }
}
