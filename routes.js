const rxjs = require('rxjs')
const fakeService = require('./fake-service')
module.exports = (app) => {
    let faketGet$ = new rxjs.Subject()

    app.get('/', (req, res) => faketGet$.next([req, res]))

    faketGet$
    .subscribe((args) => {
            let [req, res] = args
            res.send(fakeService.prepare())
    })
}