<?php

namespace Backend;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
    	'title','release_date','content','status','category_id','release_number_id','category_parent_id','image_id'
    ];
}
