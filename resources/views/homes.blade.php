@extends('master')


@section('inline_css')
  <link href="/assets/vendors/lightslider/css/lightslider.min.css" rel="stylesheet" type="text/css">
@endsection

@section('body')

<div class="row">
  <div class="col-xs-8">
    <div class="col-xs-6">
      <div class="item">
        <div class="item-image">
          <ul class="item-slider">
            <li><img src="/assets/images/houses/a_house1.jpg" alt=""></li>
            <li><img src="/assets/images/houses/a_house2.jpg" alt=""></li>
            <li><img src="/assets/images/houses/a_house3.jpg" alt=""></li>
          </ul>
           <i class="save-item fa fa-heart fa-3x"></i>
        </div>
        <div class="item-details">
          <h4>House Title</h4>
          <p class="help-block">Lorem ipsum dolor</p>
          <div class="item-review">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            300 reviews
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xs-4">
    @include('widgets.map')
  </div>
</div>
@endsection



@section('inline_scripts')
  <script type="text/javascript" src="/assets/vendors/lightslider/js/lightslider.min.js"></script>
  <script type="text/javascript" src="/assets/js/main.min.js"></script>
@endsection
