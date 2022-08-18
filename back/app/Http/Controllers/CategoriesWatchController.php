<?php

namespace App\Http\Controllers;

use App\Models\CategoriesWatch;
use App\Models\KabanchikCategories;
use Illuminate\Http\Request;

class CategoriesWatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function new_group(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string',
            'group' => 'required|string',
            'watch' => 'required|string',
            'city' => 'required|string'
        ]);
        $group = CategoriesWatch::create([
            'title' => $fields['title'],
            'group' => $fields['group'],
            'watch' => $fields['watch'],
            'city' => $fields['city']
        ]);

        $response = [
            'user' => $group,
        ];

        return response($response, 201);
    }
    public function get_groups()
    {
        return CategoriesWatch::all();
    }
    public function set_group_watched(Request $request, $id)
    {
        $group = CategoriesWatch::find($id);
        $group->update($request->all());
        return $group;
    }
    public function set_group_city(Request $request, $id)
    {
        $group = CategoriesWatch::find($id);
        $group->update($request->all());
        return $group;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
