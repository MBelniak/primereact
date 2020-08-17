import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class InplaceDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';

export class InplaceDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            products: []
        };

        this.productService = new ProductService();
        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Input</h5>
                    <Inplace closable>
                        <InplaceDisplay>
                            {this.state.text || 'Click to Edit'}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} autoFocus />
                        </InplaceContent>
                    </Inplace>

                    <h5>Image</h5>
                    <Inplace>
                        <InplaceDisplay>
                            <span className="p-d-inline-flex p-align-center">
                                <span className="pi pi-search"></span>
                                <span className="p-ml-2">View Picture</span>
                            </span>
                        </InplaceDisplay>
                        <InplaceContent>
                            <img alt="Nature" src="showcase/demo/images/nature/nature1.jpg" />
                        </InplaceContent>
                    </Inplace>

                    <h5>Lazy Data</h5>
                    <Inplace onOpen={this.onOpen}>
                        <InplaceDisplay>
                            View Data
                    </InplaceDisplay>
                        <InplaceContent>
                            <DataTable value={this.state.products}>
                                <Column field="code" header="Code"></Column>
                                <Column field="name" header="Name"></Column>
                                <Column field="category" header="Category"></Column>
                                <Column field="quantity" header="Quantity"></Column>
                            </DataTable>
                        </InplaceContent>
                    </Inplace>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const InplaceDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const onOpen = () => {
        carservice.getCarsSmall().then(data => setCars(data));
    };

    return (
        <div>
            <h3>Input</h3>
            <Inplace closable={true}>
                <InplaceDisplay>
                    Click to Edit
                </InplaceDisplay>
                <InplaceContent>
                    <InputText autoFocus />
                </InplaceContent>
            </Inplace>

            <h3>Image</h3>
            <Inplace>
                <InplaceDisplay>
                    <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                    <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                </InplaceDisplay>
                <InplaceContent>
                    <img src="showcase/demo/images/galleria/galleria5.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature" />
                </InplaceContent>
            </Inplace>

            <h3>Lazy Data</h3>
            <Inplace onOpen={onOpen}>
                <InplaceDisplay>
                    View Data
                </InplaceDisplay>
                <InplaceContent>
                    <DataTable value={cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Inplace,InplaceDisplay,InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const InplaceDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const onOpen = () => {
        carservice.getCarsSmall().then(data => setCars(data));
    };

    return (
        <div>
            <h3>Input</h3>
            <Inplace closable={true}>
                <InplaceDisplay>
                    Click to Edit
                </InplaceDisplay>
                <InplaceContent>
                    <InputText autoFocus />
                </InplaceContent>
            </Inplace>

            <h3>Image</h3>
            <Inplace>
                <InplaceDisplay>
                    <span className="pi pi-search" style={{verticalAlign: 'middle'}}></span>
                    <span style={{marginLeft:'.5em', verticalAlign: 'middle'}}>View Picture</span>
                </InplaceDisplay>
                <InplaceContent>
                    <img src="showcase/demo/images/galleria/galleria5.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature" />
                </InplaceContent>
            </Inplace>

            <h3>Lazy Data</h3>
            <Inplace onOpen={onOpen}>
                <InplaceDisplay>
                    View Data
                </InplaceDisplay>
                <InplaceContent>
                    <DataTable value={cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight lang="js">
{`
import { Inplace } from 'primereact/inplace';
`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Inplace requires InplaceDisplay and InplaceContent component as children to define the content to display in each state. Active state of the inplace
                can either be managed as a Controlled or Uncontrolled component.</p>

                        <p>In controlled mode, <i>active</i> and <i>onToggle</i> properties need to be defined to control the active state.</p>
<CodeHighlight>
{`
<Inplace active={this.state.active} onToggle={(e) => this.setState({active: e.value})}>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                        <p>In uncontrolled mode, no additional properties are required. Initial state can be still be provided using the <i>active</i> property in uncontrolled mode however
                it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the active state, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<Inplace>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                        <h3>Closable</h3>
                        <p><i>closable</i> property is handy within forms as it enables to get back to output mode after editing is completed using a button displayed next to the form field.</p>
<CodeHighlight>
{`
<Inplace closable={true}>
    <InplaceDisplay>
        Click to Edit
    </InplaceDisplay>
    <InplaceContent>
        <InputText autoFocus />
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                        <h3>Lazy Loading</h3>
                        <p>Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table
                        if the user decides to open the inplace.</p>
<CodeHighlight lang="js">
{`
onOpen() {
    this.productService.getProductsSmall().then(data => this.setState({ products: data }));
}

<Inplace onOpen={this.onOpen}>
    <InplaceDisplay>
        View Data
    </InplaceDisplay>
    <InplaceContent>
        <DataTable value={this.state.products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </InplaceContent>
</Inplace>
`}
</CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>active</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether the content is displayed or not.</td>
                                    </tr>
                                    <tr>
                                        <td>closable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Displays a button to switch back to display mode.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onOpen</td>
                                        <td>event: browser event </td>
                                        <td>Callback to invoke when inplace is opened.</td>
                                    </tr>
                                    <tr>
                                        <td>onClose</td>
                                        <td>event: browser event </td>
                                        <td>Callback to invoke when inplace is closed.</td>
                                    </tr>
                                    <tr>
                                        <td>onToggle</td>
                                        <td>event.originalEvent: browser event <br />
                                event.value: active state as a boolean
                            </td>
                                        <td>Callback to invoke when inplace is opened or closed.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-inplace</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-inplace-display</td>
                                        <td>Display container</td>
                                    </tr>
                                    <tr>
                                        <td>p-inplace-content</td>
                                        <td>Content container</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="InplaceDemo" sources={this.sources} service="CarService" data="cars-small" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
