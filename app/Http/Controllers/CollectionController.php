<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function show(Collection $collection) {

        return Inertia::render('Collection', [
            'collection' => $collection->load('products'),
            'collections' => Collection::all(),
            'currentCollection' => $collection->title
        ]);
    }

    public function store(Request $request) {

        $attributes = $request->validate([
            'title' => ['required', 'min:10'],
            'description' => ['required', 'min:10'],
        ]);

        Collection::create($attributes);

        return redirect()->route('home')->banner('Collection Created Successfully');
    }

    public function update(Request $request, Collection $collection) {

        $attributes = $request->validate([
            'title' => ['min:10'],
            'description' => ['min:10'],
        ]);

        $collection->update($attributes);

        return redirect()->route('collection', $collection->id)->banner('Collection Updated Successfully');
    }

    public function destroy(Collection $collection) {

        $collection->delete();

        return redirect()->route('home')->banner('Collection deleted successfully');
    }
}
