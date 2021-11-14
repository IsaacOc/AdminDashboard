<?php

namespace App\Modules\Admin_Login\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Modules\Admin_Login\Entities\Admin as User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        $user = User::all();
        return response()->json(['users' => $user]);
    }
    public function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'phone' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string',
            'isAdmin' => 'required'
        ]);
        try {

            $user = new User([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'isAdmin' => $request->isAdmin
                ]);

            $user->save();

            Auth::login($user);
            
            return response()->json([
                'login' => Auth::login($user),
                'user' => $user,
                'token' => $user->createToken('Token')->accessToken,
                'Message' => 'User created successfully'
            ]); 
        } catch(Throwable $e) {
            throw new Exception('Invalid Data');
        }
    }

    // Login admin User
    public function login(Request $request) 
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        // Find User with that email
        $user = User::where('email', $request->email)->first();
        
        // (!$user->isAdmin)
        // Check for user's password validity if user exists
        if(!$user || !Hash::check($request->password, $user->password)) {
             return response()->json([
                'message' => 'User not found!'
             ], 404);
        } 

        Auth::login($user);
            
        return response()->json([
            'login' => Auth::login($user),
            'user' => $user,
            'token' => $user->createToken('Token')->accessToken,
            'Message' => 'User Logged in successfully'
        ]);
    }

    // Get all Users
    public function users() {
        $users = User::all();
        return response()->json($users);
    }

    // Get Authenticated User
    public function authUser(Request $request)
    {
        return Auth::user();
    }
    

    // Log out 
    public function logout(Request $request)
    {
        // Delete all users tokens
        $request->user()->tokens()->delete();

        return response()->json('Logged Out successfully');
    }
}
