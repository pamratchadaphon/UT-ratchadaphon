import PropTypes from 'prop-types'

const Info_ricecrop = ({riceCaltivation}) => {
  const formatDate = (string) => {
    const date = new Date(string)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`
  }

  return (
    <div className="flex gap-4 w-full">
      <div className="bg-white rounded-lg border p-4 space-y-2 flex w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between rounded-lg items-center">
            <div className="flex space-x-2 items-center">
              <div className=" w-7 h-7 rounded-md text-center">
                <img src="data:image/png;base64,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" />
              </div>
              <span className="">ปีที่ทำการปลูก</span>
            </div>
            <span>{riceCaltivation.year}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center rounded-lg">
            <div className="flex space-x-2 items-center">
              <div className="w-7 h-7 rounded-md text-center">
                <img src="data:image/png;base64,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" />
              </div>
              <span className="">พันธุ์ข้าว</span>
            </div>
            <span>{riceCaltivation.riceVariety}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center rounded-lg">
            <div className="flex space-x-2 items-center">
              <div className="w-7 h-7 rounded-md text-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFa0lEQVR4nO2ZeWxVRRTGf1K0INW2LlCXREUIiUuqJhalxgXUYBCNS1TQCNI2ImpETBURtRBxKS4QBEVFa1DUuIBR3E0VqFK3tApGXIEG2ioErVFEkGeO+a6ZXOe+d2/LH33mfclL35u5c+fMWb8zhRxyyCGHHP6LE4BK4FLgULIQBwANQMr5/AU8BuSTJdgN+EDCtwJPAkuA3zQ2myzB6RK4DejrjJcBO4E/gAKyADN0kHs9c19orpQswMMS9hrP3EeaM+t0e0yWsI+Hxg8Efgd2ZItrHQJslcB3KGauBL7VAReTRbgM2B5Kv/ZZCfSjG6EfcCFwHXArMB4YDhQ7z5QqXtYCjSqKu3dirxOBV4DPgD13hfD7A5OAZo+m3aLXBNwNnAL01PebEu5VAIwBPg69v6wrxc00/QKwzXnhdrnJ10A9sAL4xeNOPwPrtH6olOFDITAYuB54VTEWvONH4Cd9N+UkgmlydEj721ShLwH66Ln1ciF77hxgFvAi8BDwfYTVrCC2AGuA7yRoymPZ5XJHozRvaHx4kgOMCwnRIq3XeZ4/HxgBfAgUAZuAg5z5gcpSq+UmHWnc8iul7AqgJLTPYj1zXtyDvOy8+EtgLLCHNHw/cJZnzV6iIgURG01XQgjQRyn6cOBgJYjXlaajsEgymZfEwlotuBro4YyvVDGrIjmmAbdleKYaeEkx6cMCyWXWioVvtMBcIkAe8CtQLqGS0vDbgZoMz+SLMc+MmH8wDe3xYrUWHOGM9Vagt2sjc4ckmBJyrSgUKXkc45mbKbnMcrHQpAXuy8zcPwCXS7MtCa1SKCGjYFkvSM/tIervxlkqpkL+QVCAjg+NXyCrvO/JKD6MiHADq8zDQmPmundpXyuCPtys+TtjnuPf9nRIhFYalJ3OlaBJWaxZZpTzu0zWeAZ4J826iZLrgbgbvacFp3rmzMXmq3pbJX9T7LYrsPi7CPhc9SvYZ4y0f5TGJkguC/pYeFsLzshQNIMAnKrvxc54GPvESL8zgHeBsyXDp4pHoybzRF0SHWSpFpjrxEnVR0uDzbr68SUBq0cD0rzH2MEGuVirWO5rmtsXWOjwvLlxD7LE4UNLVdWjsEoucLFa2P7AxphUvVC3KX1VbMs1boc4TfzLtfA9SQ/yvBaYcG/pbxTMAp8oZlp0sBtj7FGuTLXOuYQ4Sc1YhQ4Q7juukFzmZrHwtMNprJDVynXmia36ilW+0rVZ8JEYe9jhr1V8PSXeNUlcLgqJD1KnBWPVATbJSk3quy0QfeipbvBZz5wJup8yVC9dnbbqXfZ3s4J6uuZHe9xznOQy8hoLj2pBlWpEh3x4tny3MUJQo/nLQq1ugBuUbSY7nKtWqb63lHCLCOt6BX1lKEFUJD3IXC2YoH58obRZooapWv26NTpbtPlmuUlU+h0m6lGlFFskSwwKPXeykkWtYm6Qw3YrJZdZPRZmacFEmdmCEvGsNRqrEa0u1gGjeFcvKWKDLg/alUY3pSmkpWLa05TeA0pSJbmsIMdCrYdlHqt0eKR+j1fvYH58mMjemdKoy8OeAJ6T+yCl9I/B1aaqZx/lZLlVSYM9uLc1n0XuYtT+KgVnhYTbqQs4X8vaLBfY2MkbxRLd3A92WtyUGPhxcV9So0U1Ttrb6twSup8dMn+9as5yT0/eoAwYXFZkQp7a6TbnHR1qzhLdaU3R4kbHnO4tSr2eGRIhXJ5crE6+7gqzQELu7en5h4rZugcwdjEnoj/JiOqQ8Fvk6yM74SYFsugyuaJ71dMua7aF5lJKwTVdvVot0waLdE+1q/5NNlAFb4U07Qr+p7jafWof3EuPbo0ecpcB0nrUzUkOOeSQw/8QfwP4aK7Yd9YVgwAAAABJRU5ErkJggg==" />
              </div>
              <span className="">พื้นที่</span>
            </div>
            <span>{riceCaltivation.area} ไร่</span>
          </div>
          <hr />
          <div className="flex justify-between items-center rounded-lg">
            <div className="flex space-x-2 items-center">
              <div className=" w-7 h-7 rounded-md text-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVR4nO2dT0wcVRzHx/jnYPRgogeSsjOzpfx504WFZVlgBQSs1Ij/iqTgQRMPTWyiicakSu0KUYugsX+CspRWidpqGsulh8ZEe/FiYjxoDKkxVG2gQPtg252FEtqZn5kJS1hZGnTrvDfzft/ke5h5k8x738/um/ebOTxJQqFQKBQKhUKhUCgUCoVCMdZtHm9zj0Kh0J2ySsZ9KvnGi22uU15h4f2yqoGsaJe92OYaEULu8vkC923aTAqWB0Ot49V2c5vU0HCHxLPy8kJ3y6q2W1a0b61fkj0Ab9vwqdqUTyWjsp88K0ntt0u8SJZLnpJVbXJ1h0uKQxAN10N15YP2sd8fsI9X281tW7aUZQJStF83qVqYNQtJVskrsqqZVqd2dTwP5w6PQLL/U9BjcdsX9hywOxwsrlw554m27iOQ7B+Bnz88Cu3bn14GQxbyFfIEOxh+bYcFw18QgLMH46D3HOEzvNj/12b77WH4ct/+NJR5WSZBx2E8QMg91hxqdeK7Q0PZOxqLw5V9g9AabobdjTs82aan/dYQHO3qsaH4VO0Hx+uW5akKXuh4DlLvDK/b0WRscP1BuNDJm42nbwTqaptsKIqitTgLRNG+t248NvRF1s799NK70FLzMGwuKIWdDa0w/toHzMPUc/BGx3OmfyD9oB9yFog1V6oa6IePZ+1Yc6QRvj71FSwtUXi/7z3Y9Ugb81D1HLzR8UwNnlhedZEfHYNRVFR0r3XTwNYq0LvXPj/o3gEoKgqCcWMOTCMBf/05BtFQHfNQ9f/ofzOeqwc+Tz/cJxwDkn6V0BBpWncQj9Vug+HhOMxMj8PeN7rg5Ud3Mg9Wz8EbHU+y9xNw/DVLGshD1esDGXu1DzobH4dQWQ282PIMTOw5yDxUPQdveDy9x/gEIqx7EQgwh4BA4uyDRyBx9mHzDqQ+0giTrx8SxrNvfmSHfqlrIOux7e6P2QGxqtZAcUgYt0e3w5X9x6AmUJP1OG1mQMoronahhE6sZEDpHwjE5OhHgUAM9hAQiME+eARisA8bgRjsA0YgBvtQEQgHQZoIJHsI86lpSMxdgMVrM1nP/9O8XOfJZe/S0gzURhsgUBaGuvrmlfN6chIKi8uhNBjOMC/XeRPIjQkwF8+AuXAS6MURKK+ozhikfbxwMsO8XOcpIPZ36uu/gXltlLughQNiTQlNzdu4DZqKBoT3oKmIQIIVEUhMf5bh8+fia4Lh+TrPAEnpUxCO1EFpsGqNW1ufdM11ngHiRVMEkmAOwRVAeK+s50Wq1HmvrHXRKnXel6lUtGUv7wFSBMJXgBSB8BUgFREIz5U1Fa1S572yTmGlLo4pj/8QkU15BcJ7ZT2PlTo/lbWOlTpfy1Qq4rKX5wApAuErQIpA+AqQigiE58qaYqXOV2WdwkpdHFMepyyRTXkF4pbK2hQBCPvKuirDN/sGLgQQNy1TTQSCQG658B+SwCmrPIcpK0WPQ1tbm9hTFk+V9eLVUTCNWXGB8FZZd3R2OgKDWyAimyKQBHMICMRgHzwCMdiHjUAM9gEjEIN9qAiEgyBNNwNJ745gvVm1tm9gHYLJkS9O/u787giWZIX8Yt24p6fb3jEg2zcI0Xz50nmIxWLp/UNOOwokXy2pkxVy/RbvDQhesE8hS/n+rZWS07L27fOp5KysarOySuZEt08hM9Z+uapKqhyHgUKhUCgUCoVCoVAoFAoleV5/A+xTXor3iFRnAAAAAElFTkSuQmCC" />
              </div>
              <span className="">วันที่ปลูก</span>
            </div>
            <span>{formatDate(riceCaltivation.startDate)}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center rounded-lg">
            <div className="flex space-x-2 items-center">
              <div className="w-7 h-7 rounded-md text-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACTUlEQVR4nO1WX0/TUBTvB4FnXtnD3vbgKynSYgORhE9h0CkSo/gB5AE+gEZEFm07ZaIRFrNRu/ABVNabPahPtiWML3DM2ZCwtkjPuN3dkvtLTrJ0yfn9uefcVlEkJCTIsKuOalUPftv7B7/MvfqU6D5kIKFddaBT+85P0X3IOCc9K9F9EqFZ2rhq6m9UUz+dtnS4WFHi6P9py76iD3Krpm7N2DMTClX8tKWFSaSqqcWI8RlVPKmPqR+jptQGMPnLiAsbN2LE+IxqgN5HK1EMxMbmX02u5mPEuSd5sgFyH1NvpzbwP+Lcah5e7O6ckz7/UIHcU7qBfvooPAzgMRvPFjvkSGqsLUJhvb8RMoh9uBjARUNyTBALf/e7xAViHy4GRJYiDVgjcgIsbMAwliINhPIEQI5QGgxiVI78r/DYWYHPrbejt8QofrlW7FyNt8rz8LFVGh0DKP5h/V7P/X67sgDf/tSH30AzcOGR86BHvFY2oNx8Kf4ErkowKfnZsgHvvS3xO1BhWzC/swC7re1MkmdZGkDxmGR3IediJrril68tnmVl4H7tbo84vFU+nd0q3bEpXmtsWNYGjnwHirWliIk5qLDX3JJnWe/Ad9+BpS93esTetGYTkn/Vt3iW9S2UdBK8kmeDMHCZCV7i2aBeZBdN8BTPBvkm/uE7nW+dd94mN/FsGD4lpIG0EJ004zBCp6LFskh5gXtCMOBaogWzaAWN7dQGWv7hhBc0jodHvBs0g8aYQoEXHo6z0C2x0G2LE++2MXmyeAkJCWVk8BdCIRUrBKwL1AAAAABJRU5ErkJggg==" />
              </div>
              <span className="">วันที่เก็บเกี่ยว</span>
            </div>
            <span>{formatDate(riceCaltivation.endDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Info_ricecrop.propTypes = {
  riceCaltivation: PropTypes.object
}
 
export default Info_ricecrop;
