import React,{Component} from 'react';
import Main from '../template/Main'
import axios from 'axios'

const headerprops = {
    icon: 'user',
    title: 'Usuarios',
    subtitle: 'Compartimento Para Admins, Gerencia De Usuarios'
}

const baseurl = 'http://localhost:3001/user';  // Remova uma das barras em "//http:"
const initialstate = {
    user: { name: '', email: '' },
    list: []
}

export default class Usercrud extends Component {

    state = { ...initialstate }

    componentWillMount() {
        axios(baseurl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    Clear() {
        this.setState({ user: initialstate.user });
    }

    Save() {
        const user = this.state.user;
        const metodo = user.id ? 'put' : 'post';
        const url = user.id ? `${baseurl}/${user.id}` : baseurl;
        axios[metodo](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialstate.user, list });
            });
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email..."></input>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.Save(e)}>
                            salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.Clear(e)}>
                            cancelar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    load(user) {
        this.setState({ user })
    }

    remover(user) {
        axios.delete(`${baseurl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }

    rendertable() {
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Açoes</th>
                    </tr>    
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                               onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                         </button>
                         <button className="btn btn-danger ml-2"
                                onClick={() => this.remover(user)}>
                            <i className="fa fa-trash"></i> 
                         </button>
                    </td>

                </tr>
            )
        }
            )
    }

    render() {
        return (
            <Main {...headerprops}>
                {this.renderForm()}
                {this.rendertable()}
            </Main>
        );
    }
}

