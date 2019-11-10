$(function(){

  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var image = message.image ? `<img src= ${message.image}>` : "";
    var html = `<div class="message">
                  <div class="message__upper-info">
                    <div class="message__upper-info__tolker">
                      ${message.user_name}
                    </div>
                    <div class="message__upper__date">
                      ${message.time}
                    </div>
                  </div>
                  <div>
                  </div class="message__text">
                    <p class="message__text__content">
                      ${message.content}
                    </p>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      console.log(html)
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      return false
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
})

