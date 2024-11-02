<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Collection;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        return Inertia::render('Welcome', [
            'collections' => Collection::with(['products' => function($query) {
                $query->orderBy('created_at', 'desc');
            }])->get()->map(function($collection) {
                $collection->products = $collection->products->take(5);
                return $collection;
            }),
            'currentCollection' => 'All'
        ]);
    }
}
