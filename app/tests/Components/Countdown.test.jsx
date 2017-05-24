import React from 'react'
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-dom/test-utils'

import Countdown from 'Countdown'

describe('Countdown', () => {
  it('Countdown should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10)
      expect(countdown.state.countdownStatus).toBe('started')

      setTimeout(() => {
        expect(countdown.state.count).toBe(9)
        done()
      }, 1001)
    })
  })

  describe('handleSetCountdown', () => {
    it('countdown should never be less than 0', (done) => {
      var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        done()
      }, 3001)
    })
  })
})
