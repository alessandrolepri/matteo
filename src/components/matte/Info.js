/* eslint-disable max-len */

import React from 'react'
// import { Container, Header, Image, Icon } from 'semantic-ui-react'

const Info = () => (

  <div>
    <div className="wsite-multicol">
      <div className="wsite-multicol-table-wrap">
        <table className="wsite-multicol-table">
          <tbody className="wsite-multicol-tbody">
            <tr className="wsite-multicol-tr">
              <td className="wsite-multicol-col1">
                <h2 className="wsite-content-title">
                CONTACT ME
                </h2>
                <div className="paragraph1">
                  <span>What ever your question or query please feel free to get in touch and I will get straight back to   you</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="wsite-multicol">
      <div className="wsite-multicol-table-wrap">
        <table className="wsite-multicol-table">
          <tbody className="wsite-multicol-tbody">
            <tr className="wsite-multicol-tr">
              <td className="wsite-multicol-col">
                <h2 className="wsite-content-title">
              TELEPHONE
                </h2>
                <div className="paragraph1">
                  <a href="tel:+44123456789">+44 123456789</a>
                </div>
              </td>

              <td className="wsite-multicol-col2">
                <h2 className="wsite-content-title">
              EMAIL
                </h2>
                <div className="paragraph1">
                  <a href="mailto:test@test.com">test@test.com</a>
                </div>
              </td>


            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


)

export default Info
