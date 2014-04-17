define ['jquery', 'templates'], ($, templates) ->

  class ExampleView

    render: (element) ->
      $(element).append templates.example({name:'EJS', css:'sass'})
      $(element).append templates['another-example']({name:'EJS'})

  ExampleView