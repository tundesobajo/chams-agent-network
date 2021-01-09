jQuery(function($){

  $(':checkbox[name^=check_confirm]', context).once('check_confirm').change(function() {
      toggleCheckButton(context);
  });

  $(':input[name=region_id]', context).once('region_select').change(function() {
      areaFill(context);
  });

  $(':input[name=area_id]', context).once('area_select').change(function() {
      toggleAreaButton(context);
  });

});

function toggleCheckButton(context) {
  var $boxes = $(':checkbox[name^=check_confirm]', context);
  var $bttn = $('#check-button', context);
  if ($boxes.is(":not(:checked)")) {
      $bttn.addClass('disabled');
  } else {
      $bttn.removeClass('disabled');
  }
}

function areaFill(context) {
  $('#area-button', context).addClass('disabled');
  var rgn = $(':input[name=region_id]', context).val();
  var $area = $(':input[name=area_id]', context);
  var ops = '<option value="0" selected>- Select a coverage area -</option>';
  if (rgn) {
      $.each(drupalSettings.areaOptions[rgn], function(index, value) {
          var cnt = value['count'] < drupalSettings.maxCount;
          var txt = cnt ? value['label'] : value['label'] + ' (UNAVAILABLE)';
          var dis = cnt ? '' : ' disabled';
          ops += '<option value="' + index + '"' + dis + '>' + txt + '</option>';
      });
  }
  $area.empty();
  $area.append(ops);
}

function toggleAreaButton(context) {
  var $bttn = $('#area-button', context);
  var ar = $(':input[name=area_id]', context).val();
  if (parseInt(ar)) {
      $bttn.removeClass('disabled');
  } else {
      $bttn.addClass('disabled');
  }
}