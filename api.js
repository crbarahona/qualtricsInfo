Qualtrics.SurveyEngine.addOnReady(function()
{
	$j('#sessionModal').on('show.bs.modal', function (event) {
	  var button = $j(event.relatedTarget) // Button that triggered the modal
	  var id = button.data('id')
	  var modal = $j(this)
	  $j.getJSON("https://api.myjson.com/bins/c8wln",function(data){
		var session = data[id]
		if(session != null){
			modal.find('.modal-title').html('Session: ' + session.Title)
			modal.find('.modal-body p:nth-of-type(1)').html(session.Description)
			modal.find('.modal-body p:nth-of-type(2)').text(session["Track(s)"])
			modal.find('.modal-body p:nth-of-type(3)').text(session.Skill)
		}
		else{
			modal.find('.modal-title').text('Session: ' + "Cannot Load Data")
			modal.find('.modal-body p:nth-of-type(1)').html("Cannot Load Data")
			modal.find('.modal-body p:nth-of-type(2)').text("Cannot Load Data")
			modal.find('.modal-body p:nth-of-type(3)').text("Cannot Load Data")
		}
	  }).fail(function(){
		modal.find('.modal-title').text('Session: ' + "Cannot Load Data")
		modal.find('.modal-body p:nth-of-type(1)').html("Cannot Load Data")
		modal.find('.modal-body p:nth-of-type(2)').text("Cannot Load Data")
		modal.find('.modal-body p:nth-of-type(3)').text("Cannot Load Data")
	  })
	})

});