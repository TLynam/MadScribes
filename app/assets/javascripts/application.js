// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(function() {
  $("tr[data-link]").click(function() {
    window.location = this.dataset.link
  });
})

ws = new WebSocket('ws://' + location.host + location.pathname + '/chat')
ws.onmessage = function(event) { 
	$('.chat-window ul').append($('<li>').text(event.data))
}

$(function() {
  $('.chat-window button').click(function() {
  	var input = $(this).siblings('input')
  	ws.send(input.val())
  	input.val(null)
  })
})
