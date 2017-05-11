@extends('master')


@section('inline_css')
  <link href="/assets/vendors/lightslider/css/lightslider.min.css" rel="stylesheet" type="text/css">
@endsection

@section('body')

<div class="row">

  <div class="col-xs-8">
    @foreach ($houses as $key => $house)
      <div class="col-xs-6">
        <div class="item" data-index="{{$key}}" data-name="{{$house->name}}" data-lat="{{$house->lat}}" data-long="{{$house->long}}" data-price="{{number_format($house->price)}}">
          <div class="item-image">
            <ul class="item-slider">
              @define $img_prefix = ['a', 'b', 'c', 'd'];
              @define $img_suffix = [1, 2 , 3];
              {{-- Get Random Image --}}
              @for ($i=1; $i <= 3 ; $i++)
                @define $prefix = $img_prefix[array_rand($img_prefix)]
                @define $suffix = $img_suffix[array_rand($img_suffix)]
                <li><img src="/assets/images/houses/{{ $prefix }}_house{{$i}}.jpg" alt=""></li>
              @endfor
              {{-- <li><img src="/assets/images/houses/a_house1.jpg" alt=""></li> --}}
            </ul>
             <i class="save-item fa fa-heart fa-3x"></i>
          </div>
          <div class="item-details">
            <h4>&#8369;{{number_format($house->price)}}  {{$house->name}}</h4>
            <p class="help-block">{{$house->description}}</p>
            <div class="item-review">
              @define $star_ratings = [1, 2 , 3, 4, 5];
              @define $rating = $star_ratings[array_rand($star_ratings)];
              @for ($i=0; $i < $rating; $i++)
                <span class="fa fa-star"></span>
              @endfor
              @for ($i= $rating; $i < 5; $i++)
                <span class="fa fa-star-o"></span>
              @endfor

              {{number_format(rand(100, 2000))}} reviews
            </div>
          </div>
        </div>
      </div>
    @endforeach
  </div>
  <div class="col-xs-4">
    @include('widgets.map')
  </div>
</div>
@endsection



@section('inline_scripts')
  <script src='https://maps.google.com/maps/api/js?sensor=false&libraries=geometry&v=3.22&key=AIzaSyC6pwEoTVF29E3iuxfazy-LqRTx_4EmIPY'></script>
  <script type="text/javascript" src="/assets/vendors/lightslider/js/lightslider.min.js"></script>
  <script src="assets/vendors/maplace-js/maplace.js"></script>
  <script type="text/javascript" src="/assets/js/main.min.js"></script>
@endsection
