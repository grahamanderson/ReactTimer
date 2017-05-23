import React from 'react';
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils'


import Clock from 'Clock'

describe('Clock' ,()=>{
  it('should exist', ()=> {
    expect('Clock').toExist();
  })

  describe('render', () => {
    it('should render clock to output', () =>{
      let clock =   ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
      let $el = $(ReactDom.findDOMNode(clock))
      let actualText = $el.find('.clock-text').text();

      expect(actualText).toBe("01:02");
    })
  })

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 615
      let expected = '10:15'
      let actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when min/sec when less than 10', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 61
      let expected = '01:01'
      let actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
});
