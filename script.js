var resource= [];
var events= [];

var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',    
    resources:resource,
    editable: true,
    events: events,
    allDaySlot: false,
    slotMinTime: "9:00:00",
    slotMaxTime: "21:00:00",
    editable: true,
    nowIndicator: true,
    eventColor: 'blue',
  });  

  calendar.render();

$('#submit').click(a => {
  a.preventDefault()
    var drId = $("#drId").val();
    var drName = $("#drName").val();

    var drObj = {
        id: drId,
        title: drName
    }
    clearField1();
    drId==""||drName==""?submitError():calendar.addResource(drObj);
});
 

$('#sub').click(a => {
  var patName = $("#PatName").val();
  var sStart = $("#ADST").val();
  var eEnd = $("#ADET").val();
  var mobile = $("#Mob").val();
  var selectDr = $("#DrId").val();

  var patObj = {
      title: patName,
      start: sStart,
      end: eEnd,
      description: mobile,
      resourceId: selectDr

  }
  clearField();
 calendar.addEvent(patObj);
});


function submitError(){
  Swal.fire({
    title: " dr Entery pending?",
    text: "That thing is still around?",
    icon: "question"
  })
  ;}  


function clearField1()
  {
    $("#drId").val("");
    $("#drName").val("");
  };

function clearField()
  {$("#PatName").val("");
  $("#PatEml").val("");
  $("#ADST").val("");
  $("#ADET").val("");
  $("#Mob").val("");
}





