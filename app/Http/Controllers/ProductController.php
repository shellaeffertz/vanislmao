<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    
    public function store(Request $request) {

        $attributes = $request->validate([
            'collection_id' => ['required'],
            'title' => ['required', 'min: 10'],
            'description' => ['required', 'min: 10'],
            'price' => ['required', 'numeric'],
            'stock' => ['required', 'integer'],
            'file' => ['required', 'image'],
        ]);

        $filePath = Storage::disk('public')->put('images/',$attributes['file']);

        Product::create([
            'collection_id' => $attributes['collection_id'],
            'title' => $attributes['title'],
            'description' => $attributes['description'],
            'price' => $attributes['price'],
            'stock' => $attributes['stock'],
            'image_url' => $filePath,
        ]);

        return redirect()->route('collection', $attributes['collection_id'])->banner('Product added successfully');
    }

    public function show(Product $product) {

        return Inertia::render('Product', [
            'product' => $product->load('collection')
        ]);
    }

    public function update(Product $product, Request $request) {

        $attributes = $request->validate([
            'title' => ['required', 'min: 10'],
            'description' => ['required', 'min: 10'],
            'price' => ['required', 'numeric'],
            'stock' => ['required', 'integer'],
        ]);

        if($request->hasFile('file')) {

            $request->validate([
                'file' => ['required', 'image']
            ]);

            Storage::disk('public')->delete($product->image_url);
            $filePath = Storage::disk('public')->put('images/', $request->file('file'));

            $product->update([
                'image_url' => $filePath,
            ]);
        }

        $product->update([
            'title' => $attributes['title'],
            'description' => $attributes['description'],
            'price' => $attributes['price'],
            'stock' => $attributes['stock'],
        ]);

        return redirect()->route('product', $product->id)->banner('Product updated successfully');
    }

    public function destroy(Product $product) {

        $product->delete();

        return redirect()->route('collection', $product->collection->id)->banner('Product deleted successfully');
    }
}
