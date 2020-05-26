const state = {
    "home":{},
    "service":{
        "title": "WeAre professional",
        "content": "對於企業客戶，每一個決定都會產生影響，我們在這裡可以幫助您指導遷移或啟動過程中的動盪和壓力。我們首先研究您的要求和需求，然後與我們經驗豐富的技術人員團隊一起開發可行的解決方案以及部署策略",
        "footer_left": "For Enterprise clients every decision has repercussions and we are here to help guide you through the turbulence and stress involved in migrations or start-ups. We start by delving into your requirements and needs, then working with our team of experienced technicians to develop a working solution as well as a deployment strategy.",
        "footer_right": "Consultation Services (Standardization, Strategic Technology and Adoption Assessment, Evaluation, POC, Mentoring) Implementation Services (Design, Architect, Plan and Build) Training Services (Standard or Customize) Managed Services (7/24 round the clock remote/on-site project nursing residency or support) Development Services (Java and Enterprise System Integration) Enterprise"
    },
    "customer":{},
    "hire":{
        "title": "Work together for success!",
        "content": "Welcome! Let's create your profile"
    },
    'welfare':{
        "title": "福利制度",
        "content": "完善的福利制度，是萬聯科技的目標，我們相信集體的福祉乘上個人的利益，才能夠招募更有潛力並且與公司同步成長的工作夥伴。"
    },
    "job":{
        "title": "最新職缺",
        "content": "萬聯科技最新職缺，我們將不定期更新最新職缺，若有適合您的職缺可以進行訂閱，系統將自動通知您的信箱。"
    },
    "contact":{}
}

export const mutations = {
    SET_HOME: (state, payload) => {
        state.home = payload
    },
    SET_SERVICE: (state, payload) => {
        state.service = payload
    },
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload
    },
    SET_HIRE: (state, payload) => {
        state.hire = payload
    },
    SET_WELFARE: (state, payload) => {
        state.welfare = payload
    },
    SET_JOB: (state, payload) => {
        state.job = payload
    },
    SET_CONTACT: (state, payload) => {
        state.contact = payload
    }
}

export const actions = {
    setCatalog({ commit }, payload) {

        for (let i = 0; i < payload.length; i++) {
            const currentRow=payload[i]

            if(!currentRow.en_name || currentRow.description) continue
            switch (currentRow.en_name) {

                case 'home':
                    commit('SET_HOME', currentRow.description)
                    break;
                case 'service':
                    commit('SET_SERVICE', currentRow.description)
                    break;
                case 'customer':
                    commit('SET_CUSTOMER', currentRow.description)
                    break;
                case 'welfare':
                    commit('SET_WELFARE', currentRow.description)
                    break;
                case 'job':
                    commit('SET_JOB', currentRow.description)
                    break;
                case 'hire':
                    commit('SET_HIRE', currentRow.description)
                    break;
                case 'contact':
                    commit('SET_CONTACT', currentRow.description)
                    break;

            }
        }

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
