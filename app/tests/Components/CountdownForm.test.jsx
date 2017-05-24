import React from 'react'
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils'

import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist()
  })

  it('should call onSetCountdown if valid seconds enters', () => {
    var spy = expect.createSpy()
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDom.findDOMNode(countdownForm))

    countdownForm.seconds.value = '109'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(109)
  })

  it('should call not onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy()
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDom.findDOMNode(countdownForm))

    countdownForm.seconds.value = '109b'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })

})
