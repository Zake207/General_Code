#include "../lib/Grafo.h"

    Grafo::Grafo(vector<Nodo>& node_list) {
        node_list_ = node_list;
    }
    void Grafo::Print() {
        for (auto& node : node_list_) {
            cout << node << endl;
        }
    }
    // Recorrido en amplitud (BFS)
    void Grafo::RecorridoAmplitud(std::ofstream &output_file) {
        srand (time(NULL)); // Inicialización de la semilla para la generación de números aleatorios
        // Petición de los nodos de inicio y fin
        int pos_ini{0};
        int pos_fin{0};
        cout << "Ingrese el nodo de inicio: ";
        cin >> pos_ini;
        cout << "Ingrese el nodo de fin: ";
        cin >> pos_fin;
        output_file << "Nodo de inicio: " << pos_ini << endl;
        output_file << "Nodo de fin: " << pos_fin << endl;
        output_file << "//////////////////////////////////////////////" << endl;
        vector<Nodo> nodos_pendientes;
        // Comenzamos el recorrido desde el primer nodo
        Nodo nodo_actual = node_list_[pos_ini];
        nodo_actual.InsertParent(-1, 0);
        nodos_pendientes.emplace_back(nodo_actual);
        // Variables de control
        int iteraciones = 1;
        vector<int> nodos_generados{};
        vector<int> nodos_visitados{};
        // Bucle principal
        while (true) {
            // Si no hay nodos pendientes, se termina el recorrido
            nodos_visitados.push_back(nodo_actual.getId());
            if (nodos_pendientes.empty()) {
                output_file << "//////////////////////////////////////////////" << endl;
                output_file << "No se ha encontrado una ruta" << endl;
                break;
            }
            // Imprime el número de iteración
            output_file << "Iteracion: " << iteraciones++ << endl;
            output_file << "\tNodo: " << nodo_actual.getId() << endl;
            // Comprueba si el nodo actual es el nodo final
            if (nodo_actual.getId() == pos_fin) {
                output_file << "//////////////////////////////////////////////" << endl;
                // cout << nodo_actual << endl;
                nodo_actual.getParents().erase(nodo_actual.getParents().begin());
                output_file << "Ruta encontrada: ";
                for (auto& parent : nodo_actual.getParents()) {
                    output_file << parent.first << " ";
                }
                output_file << nodo_actual.getId() << endl;
                int coste = 0;
                for (auto& parent : nodo_actual.getParents()) {
                    coste += parent.second;
                }
                output_file << "Coste: " << coste << endl;
                break;
            }
            // Si no es el nodo final, se extraen los hijos del nodo actual teniendo en cuenta los padres del nodo actual
            else {
                // Elimino el nodo actual de los nodos pendientes
                for (int i = 0; i < nodos_pendientes.size(); ++i) {
                    if (nodos_pendientes[i].getId() == nodo_actual.getId()) {
                        nodos_pendientes.erase(nodos_pendientes.begin() + i);
                    }
                }
                // Inserto los hijos del nodo actual en los nodos pendientes
                for (auto& child : nodo_actual.getChildren()) {
                    int childId = child.first;
                    double cost = child.second;
                    Nodo childNode = node_list_[childId];
                    for (auto& parent : nodo_actual.getParents()) {
                        childNode.InsertParent(parent.first, parent.second);
                    }
                    childNode.InsertParent(nodo_actual.getId(), cost);
                    bool insertar = true;
                    for (auto& parent : childNode.getParents()) {
                        if (parent.first == childId) {
                            insertar = false;
                        }
                    }
                    if (insertar) {
                        nodos_pendientes.emplace_back(childNode);
                        nodos_generados.push_back(childId);
                    }
                }
                // Escojo al siguiente nodo a visitar de manera aleatoria entre los nodos pendientes
                // Elijo entre el que tiene menor coste o el que tiene mayor coste de manera aleatoria
                    int min_cost = 999999;
                    int max_cost = 0;
                    for (auto& node : nodos_pendientes) {
                        if (node.getParents().size() > 0) {
                            int cost = 0;
                            for (auto& parent : node.getParents()) {
                                cost += parent.second;
                            }
                            if (cost < min_cost) {
                                min_cost = cost;
                            }
                            if (cost > max_cost) {
                                max_cost = cost;
                            }
                        }
                    }
                    vector<int> nodos_min_cost;
                    vector<int> nodos_max_cost;
                    for (auto& node : nodos_pendientes) {
                        if (node.getParents().size() > 0) {
                            int cost = 0;
                            for (auto& parent : node.getParents()) {
                                cost += parent.second;
                            }
                            if (cost == min_cost) {
                                nodos_min_cost.push_back(node.getId());
                            }
                            if (cost == max_cost) {
                                nodos_max_cost.push_back(node.getId());
                            }
                        }
                    }
                    int next_node = 0;
                    if (rand() % 2 == 0) {
                        next_node = nodos_min_cost[rand() % nodos_min_cost.size()];
                    } else {
                        next_node = nodos_max_cost[rand() % nodos_max_cost.size()];
                    }
                    for (auto& node : nodos_pendientes) {
                        if (node.getId() == next_node) {
                            nodo_actual = node;
                        }
                    }
                    
                output_file << "\tNodos generados: ";
                for (int i = 0; i < nodos_generados.size(); ++i) {
                    output_file << nodos_generados[i] << " ";
                }
                output_file << endl;
                output_file << "\tNodos visitados: ";
                for (int i = 0; i < nodos_visitados.size(); ++i) {
                    output_file << nodos_visitados[i] << " ";
                }
                output_file << endl;
                // nodos_generados.clear();
            }
        }
    }
    // Recorrido en profundidad (DFS)
    void Grafo::RecorridoProfundidad(std::ofstream &output_file) {
        // Petición de los nodos de inicio y fin
        int pos_ini{0};
        int pos_fin{0};
        cout << "Ingrese el nodo de inicio: ";
        cin >> pos_ini;
        cout << "Ingrese el nodo de fin: ";
        cin >> pos_fin;
        output_file << "Nodo de inicio: " << pos_ini << endl;
        output_file << "Nodo de fin: " << pos_fin << endl;
        output_file << "//////////////////////////////////////////////" << endl;
        stack<Nodo> pila_nodos;
        // Comenzamos el recorrido desde el primer nodo
        Nodo nodo_actual = node_list_[pos_ini];
        nodo_actual.InsertParent(-1, 0);
        pila_nodos.push(nodo_actual);
        // Variables de control
        bool encontrado = false;
        int iteraciones = 1;
        vector<int> nodos_generados{};
        vector<int> nodos_visitados{};
        // Bucle principal
        while (!encontrado) {
            Nodo nodo_actual = pila_nodos.top();
            pila_nodos.pop();
            nodos_visitados.push_back(nodo_actual.getId());
            output_file << "Iteracion: " << iteraciones++ << endl;
            output_file << "\tNodo: " << nodo_actual.getId() << endl;
            // Comprueba si el nodo actual es el nodo final
            if (nodo_actual.getId() == pos_fin) {
                output_file << "//////////////////////////////////////////////" << endl;
                // cout << nodo_actual << endl;
                nodo_actual.getParents().erase(nodo_actual.getParents().begin());
                output_file << "Ruta encontrada: ";
                for (auto& parent : nodo_actual.getParents()) {
                    output_file << parent.first << " ";
                }
                output_file << nodo_actual.getId() << endl;
                int coste = 0;
                for (auto& parent : nodo_actual.getParents()) {
                    coste += parent.second;
                }
                output_file << "Coste: " << coste << endl;
                break;
            }
            // Si no es el nodo final, se extraen los hijos del nodo actual teniendo en cuenta los padres del nodo actual
            else {
                for (int i = nodo_actual.getChildren().size() - 1; i >= 0; --i) {
                    int childId = nodo_actual.getChildren()[i].first;
                    double cost = nodo_actual.getChildren()[i].second;
                    Nodo childNode = node_list_[childId];
                    for (auto& parent : nodo_actual.getParents()) {
                        childNode.InsertParent(parent.first, parent.second);
                    }
                    childNode.InsertParent(nodo_actual.getId(), cost);
                    bool insertar = true;
                    for (auto& parent : childNode.getParents()) {
                        if (parent.first == childId) {
                            insertar = false;
                        }
                    }
                    if (insertar) {
                        pila_nodos.push(childNode);
                        nodos_generados.push_back(childId);
                    }
                }
                output_file << "\tNodos generados: ";
                for (int i = 0; i < nodos_generados.size(); ++i) {
                    output_file << nodos_generados[i] << " ";
                }
                output_file << endl;
                output_file << "\tNodos visitados: ";
                for (int i = 0; i < nodos_visitados.size(); ++i) {
                    output_file << nodos_visitados[i] << " ";
                }
                output_file << endl;
                // nodos_generados.clear();
            }
        }
    }