$(function() {
	$('.paths.example .menu .item')
		.tab({
			context: '.paths.example'
	});

	$('#new-tab').click(function() {
		$('.small.modal')
		  .modal('show')
		;
	});

});