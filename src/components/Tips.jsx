import React from "react";

function Tips() {
  const tipsTitle = `Top 10 Tips for Stress-Free Wedding Planning`
  const tipsText = `Planning a wedding is an exciting journey, but it can also be a stressful one. From choosing the perfect venue to managing your guest list and ensuring every detail is just right, the tasks can seem overwhelming. But fear not, because in this comprehensive guide, we're going to take you through the steps to plan your dream wedding while keeping stress at bay. `;
  const tipsButton = `Read More`;
  const tipsImage = `https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
  return (
    <div className="tips flex min-h-screen min-w-full">
      <div className="tips-center mx-16 flex items-center justify-evenly">
        {/* Tips Left */}
        <div className="tips-right flex w-6/12 items-center justify-center">
          <div className="tips-img flex items-center justify-center">
            <img src={tipsImage} className="w-11/12"></img>
          </div>
        </div>
        {/* End of Tips Left */}
        {/* Tips Right */}
        <div className="tips-left flex w-5/12 flex-col gap-10">
          <div className="tips-title font-serif text-5xl font-semibold">
            {tipsTitle}
          </div>
          <div className="tips-text text-lg">{tipsText}</div>
          <div className="tips-button">
            <button class="rounded bg-slate-950 px-14 py-2 font-medium text-white hover:bg-blue-700">
              {tipsButton}
            </button>
          </div>
        </div>
        {/* End of Tips Right */}
      </div>
    </div>
  );
}

export default Tips;
