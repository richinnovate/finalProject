import React from 'react'

class Wallpaper extends React.Component {

  constructor () {
    super()
    this.state = {
      dots: []
    }
  }

  componentDidMount () {
    const maxX = document.body.clientWidth
    const maxY = document.body.clientHeight
    const halfx = maxX / 2
    const halfy = maxY / 2
    const dotCount = 200
    let dots = []
    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot(halfx, halfy))
    }
    this.setState({
      dots: dots
    })

    this.refs.canvas.width = maxX
    this.refs.canvas.height = maxY
    this.animate()
  }

  animate = () => {
    const context = this.refs.canvas.getContext('2d')
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
    for (let i = 0; i < this.state.dots.length; i++) {
      this.state.dots[i].draw(context)
      this.state.dots[i].move()
    }
    window.requestAnimationFrame(this.animate)
  }

  render () {
    return <canvas ref='canvas' />
  }
}

// dots class
// @constructor
function Dot (hx, hy) {
  this.halfX = hx
  this.halfY = hy
  this.rad_x = 2 * Math.random() * hx + 1
  this.rad_y = 1.2 * Math.random() * hy + 1
  this.alpha = Math.random() * 360 + 1
  this.speed = Math.random() * 100 < 50 ? 1 : -1
  this.speed *= 0.1
  this.size = Math.random() * 5 + 1
  this.color = Math.floor(Math.random() * 256)
}

Dot.prototype.draw = function (context) {
  let dx = this.halfX + this.rad_x * Math.cos(this.alpha / 180 * Math.PI)
  let dy = this.halfY + this.rad_y * Math.sin(this.alpha / 180 * Math.PI)
  context.fillStyle = `rgb(${this.color},${this.color},${this.color})`
  context.fillRect(dx, dy, this.size, this.size)
}

Dot.prototype.move = function () {
  this.alpha += this.speed
  if (Math.random() * 100 < 50) {
    this.color += 1
  } else {
    this.color -= 1
  }
}

export default Wallpaper
