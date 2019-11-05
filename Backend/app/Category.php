<?php

namespace Backend;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable=[
    	'category_name','global_display'
    ];
}
