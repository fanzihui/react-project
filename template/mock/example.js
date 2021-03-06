module.exports = function (app) {
    app.view({
        url: '/example',
        template: '/example/index.html',
        data: {
            name: 'nimo',
            data: {
                arr: [1,2,3],
                obj: {name: 'some'},
                number:1,
                string: "abc"
            }
        }
    })
    app.ajax({
        url: '/example_some',
        type: 'post',
        res: {
            ok: {
                status: 'success'
            },
            err: {
                status: 'error',
                msg:'Error detail!'
            }
        }
    })
    app.view({
        url: '/example-router',
        template: '/example-router/index.html',
        data: {}
    })
    app.view({
        url: '/example-redux',
        template: '/example-redux/index.html',
        data: {}
    })
    app.ajax({
        url: '/example-redux/add_email',
        type: 'post',
        timeout: 500
    })
    app.ajax({
        url: '/example-redux/send',
        type: 'post',
        timeout: 500
    })
}
