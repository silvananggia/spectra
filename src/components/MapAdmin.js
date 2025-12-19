import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../utils/i18n';
import { fetchMapsAsync } from '../redux/slices/dynamicMap';
import * as mapService from '../services/map.service';
import '../assets/style/ColorPalette.css';
import './MapAdmin.scss';

const MapAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { maps, loading } = useSelector((state) => state.dynamicMap);
  
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState({});
  const [showMapForm, setShowMapForm] = useState(false);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [showLayerForm, setShowLayerForm] = useState(false);
  const [editingMap, setEditingMap] = useState(null);
  const [editingGroup, setEditingGroup] = useState(null);
  const [editingLayer, setEditingLayer] = useState(null);
  const [mapDetails, setMapDetails] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Form states
  const [mapForm, setMapForm] = useState({
    name: '',
    description: '',
    center: { lng: 118, lat: -2.5 },
    zoom: 5,
    is_public: true,
  });

  const [groupForm, setGroupForm] = useState({
    name: '',
    z_index: 0,
    is_basemap: false,
  });

  const [layerForm, setLayerForm] = useState({
    name: '',
    type: 'wms',
    url: '',
    layer_name: '',
    style: '',
    z_index: 0,
    visible: true,
  });

  useEffect(() => {
    dispatch(fetchMapsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (selectedMap) {
      loadMapDetails(selectedMap);
    }
  }, [selectedMap]);

  const loadMapDetails = async (mapId) => {
    try {
      const response = await mapService.fetchMapById(mapId);
      setMapDetails(response.data);
    } catch (err) {
      setError(t('mapAdmin.failedToLoad'));
      console.error(err);
    }
  };

  const handleCreateMap = async (e) => {
    e.preventDefault();
    try {
      await mapService.createMap(mapForm);
      setSuccess(t('mapAdmin.mapCreated'));
      setShowMapForm(false);
      setMapForm({ name: '', description: '', center: { lng: 118, lat: -2.5 }, zoom: 5, is_public: true });
      dispatch(fetchMapsAsync());
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToCreate'));
    }
  };

  const handleUpdateMap = async (e) => {
    e.preventDefault();
    try {
      await mapService.updateMap(editingMap.id, mapForm);
      setSuccess(t('mapAdmin.mapUpdated'));
      setShowMapForm(false);
      setEditingMap(null);
      setMapForm({ name: '', description: '', center: { lng: 118, lat: -2.5 }, zoom: 5, is_public: true });
      dispatch(fetchMapsAsync());
      if (selectedMap === editingMap.id) {
        loadMapDetails(editingMap.id);
      }
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToUpdate'));
    }
  };

  const handleDeleteMap = async (id) => {
    if (!window.confirm(t('common.confirm') + ' ' + t('mapAdmin.deleteMap') + '?')) return;
    try {
      await mapService.deleteMap(id);
      setSuccess(t('mapAdmin.mapDeleted'));
      dispatch(fetchMapsAsync());
      if (selectedMap === id) {
        setSelectedMap(null);
        setMapDetails(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToDelete'));
    }
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      await mapService.createLayerGroup(selectedMap, groupForm);
      setSuccess(t('mapAdmin.groupCreated'));
      setShowGroupForm(false);
      setGroupForm({ name: '', z_index: 0, is_basemap: false });
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToCreate'));
    }
  };

  const handleUpdateGroup = async (e) => {
    e.preventDefault();
    try {
      await mapService.updateLayerGroup(editingGroup.id, groupForm);
      setSuccess(t('mapAdmin.groupUpdated'));
      setShowGroupForm(false);
      setEditingGroup(null);
      setGroupForm({ name: '', z_index: 0, is_basemap: false });
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToUpdate'));
    }
  };

  const handleDeleteGroup = async (id) => {
    if (!window.confirm(t('common.confirm') + ' ' + t('mapAdmin.deleteGroup') + '?')) return;
    try {
      await mapService.deleteLayerGroup(id);
      setSuccess(t('mapAdmin.groupDeleted'));
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToDelete'));
    }
  };

  const handleCreateLayer = async (e) => {
    e.preventDefault();
    try {
      await mapService.createLayer(selectedGroup, layerForm);
      setSuccess(t('mapAdmin.layerCreated'));
      setShowLayerForm(false);
      setLayerForm({ name: '', type: 'wms', url: '', layer_name: '', style: '', z_index: 0, visible: true });
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToCreate'));
    }
  };

  const handleUpdateLayer = async (e) => {
    e.preventDefault();
    try {
      await mapService.updateLayer(editingLayer.id, layerForm);
      setSuccess(t('mapAdmin.layerUpdated'));
      setShowLayerForm(false);
      setEditingLayer(null);
      setLayerForm({ name: '', type: 'wms', url: '', layer_name: '', style: '', z_index: 0, visible: true });
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToUpdate'));
    }
  };

  const handleDeleteLayer = async (id) => {
    if (!window.confirm(t('common.confirm') + ' ' + t('mapAdmin.deleteLayer') + '?')) return;
    try {
      await mapService.deleteLayer(id);
      setSuccess(t('mapAdmin.layerDeleted'));
      loadMapDetails(selectedMap);
    } catch (err) {
      setError(err.response?.data?.message || t('mapAdmin.failedToDelete'));
    }
  };

  const openMapForm = (map = null) => {
    if (map) {
      setEditingMap(map);
      setMapForm({
        name: map.name,
        description: map.description || '',
        center: map.center?.coordinates 
          ? { lng: map.center.coordinates[0], lat: map.center.coordinates[1] }
          : map.center || { lng: 118, lat: -2.5 },
        zoom: map.zoom || 5,
        is_public: map.is_public !== false,
      });
    } else {
      setEditingMap(null);
      setMapForm({ name: '', description: '', center: { lng: 118, lat: -2.5 }, zoom: 5, is_public: true });
    }
    setShowMapForm(true);
  };

  const toggleGroupExpanded = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const openGroupForm = (group = null) => {
    if (group) {
      setEditingGroup(group);
      setGroupForm({
        name: group.name,
        z_index: group.z_index || 0,
        is_basemap: group.is_basemap || false,
      });
    } else {
      setEditingGroup(null);
      setGroupForm({ name: '', z_index: 0, is_basemap: false });
    }
    setShowGroupForm(true);
  };

  const openLayerForm = (layer = null, groupId = null) => {
    if (layer) {
      setEditingLayer(layer);
      setLayerForm({
        name: layer.name,
        type: layer.type || 'wms',
        url: layer.url || '',
        layer_name: layer.layer_name || '',
        style: layer.style || '',
        z_index: layer.z_index || 0,
        visible: layer.visible !== false,
      });
    } else {
      setEditingLayer(null);
      setLayerForm({ name: '', type: 'wms', url: '', layer_name: '', style: '', z_index: 0, visible: true });
      // Set selectedGroup jika groupId diberikan
      if (groupId) {
        setSelectedGroup(groupId);
      }
    }
    setShowLayerForm(true);
  };

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <main className="map-admin-page">
      <div className="map-admin-container">
        <h1>{t('mapAdmin.title')}</h1>
        
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}
        
        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        {/* Maps Section */}
        {!selectedMap && (
          <div className="tab-content">
            <div className="section-header">
              <h2>{t('mapAdmin.title')}</h2>
              <button className="btn-primary" onClick={() => openMapForm()}>
                + {t('mapAdmin.createMap')}
              </button>
            </div>

            {loading ? (
              <div className="loading">{t('common.loading')}</div>
            ) : (
              <div className="maps-list">
                {maps && maps.length > 0 ? (
                  maps.map((map) => (
                    <div
                      key={map.id}
                      className={`map-card ${selectedMap === map.id ? 'selected' : ''}`}
                      onClick={() => setSelectedMap(map.id)}
                    >
                      <div className="card-header">
                        <h3>{map.name}</h3>
                        {map.is_public && <span className="badge">{t('mapAdmin.public')}</span>}
                      </div>
                      <div className="card-info">
                        <p><strong>{t('maps.zoom')}:</strong> {map.zoom}</p>
                        {map.center && (
                          <p>
                            <strong>{t('maps.center')}:</strong>{' '}
                            {map.center.coordinates
                              ? `${map.center.coordinates[1].toFixed(4)}, ${map.center.coordinates[0].toFixed(4)}`
                              : `${map.center.lat?.toFixed(4)}, ${map.center.lng?.toFixed(4)}`}
                          </p>
                        )}
                      </div>
                      <div className="card-actions">
                        <button
                          className="btn-view"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/dynamic-maps/${map.id}`);
                          }}
                        >
                          {t('mapAdmin.viewMap')}
                        </button>
                        <button
                          className="btn-edit"
                          onClick={(e) => {
                            e.stopPropagation();
                            openMapForm(map);
                          }}
                        >
                          {t('common.edit')}
                        </button>
                        <button
                          className="btn-delete"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteMap(map.id);
                          }}
                        >
                          {t('common.delete')}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">{t('mapAdmin.noMaps')}</div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Map Details with Layer Groups and Layers */}
        {selectedMap && mapDetails && (
          <div className="tab-content">
            <div className="map-details-header">
              <div className="map-details-title">
                <h2>{mapDetails.name}</h2>
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedMap(null);
                    setSelectedGroup(null);
                    setMapDetails(null);
                    setExpandedGroups({});
                  }}
                >
                  ← {t('common.back')}
                </button>
              </div>
              {mapDetails.description && (
                <p className="map-description">{mapDetails.description}</p>
              )}
              <div className="map-details-actions">
                <button className="btn-primary" onClick={() => openMapForm(mapDetails)}>
                  {t('mapAdmin.editMap')}
                </button>
                <button className="btn-view" onClick={() => navigate(`/dynamic-maps/${selectedMap}`)}>
                  {t('mapAdmin.viewMap')}
                </button>
              </div>
            </div>

            {/* Layer Groups Section */}
            <div className="layer-groups-section">
              <div className="section-header">
                <h3>{t('mapAdmin.layerGroups')}</h3>
                <button className="btn-primary" onClick={() => openGroupForm()}>
                  + {t('mapAdmin.createGroup')}
                </button>
              </div>

              {mapDetails.layer_groups && mapDetails.layer_groups.length > 0 ? (
                <div className="groups-list-expanded">
                  {mapDetails.layer_groups.map((group) => (
                    <div key={group.id} className="group-card-expanded">
                      <div 
                        className="group-header-expanded"
                        onClick={() => toggleGroupExpanded(group.id)}
                      >
                        <div className="group-title">
                          <span className="expand-icon">{expandedGroups[group.id] ? '▼' : '▶'}</span>
                          <h4>{group.name}</h4>
                          {group.is_basemap && <span className="badge">{t('maps.basemap')}</span>}
                        </div>
                        <div className="group-info-inline">
                          <span>{t('mapAdmin.zIndex')}: {group.z_index}</span>
                          <span>{t('mapAdmin.layers')}: {group.layers?.length || 0}</span>
                        </div>
                        <div className="group-actions-inline">
                          <button
                            className="btn-edit"
                            onClick={(e) => {
                              e.stopPropagation();
                              openGroupForm(group);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn-delete"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteGroup(group.id);
                            }}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                      
                      {expandedGroups[group.id] && (
                        <div className="layers-container">
                          <div className="layers-header">
                            <h5>{t('mapAdmin.layers')}</h5>
                            <button 
                              className="btn-primary btn-small"
                              onClick={() => openLayerForm(null, group.id)}
                            >
                              + {t('mapAdmin.createLayer')}
                            </button>
                          </div>
                          
                          {group.layers && group.layers.length > 0 ? (
                            <div className="layers-list-inline">
                              {group.layers.map((layer) => (
                                <div key={layer.id} className="layer-card-inline">
                                  <div className="layer-header-inline">
                                    <div className="layer-title">
                                      <h5>{layer.name}</h5>
                                      <span className="badge badge-type">{layer.type.toUpperCase()}</span>
                                    </div>
                                    <div className="layer-actions-inline">
                                      <button
                                        className="btn-edit"
                                        onClick={() => openLayerForm(layer)}
                                      >
                                        {t('common.edit')}
                                      </button>
                                      <button
                                        className="btn-delete"
                                        onClick={() => handleDeleteLayer(layer.id)}
                                      >
                                        {t('common.delete')}
                                      </button>
                                    </div>
                                  </div>
                                  <div className="layer-info-inline">
                                    <p><strong>{t('mapAdmin.url')}:</strong> {layer.url}</p>
                                    {layer.layer_name && <p><strong>{t('mapAdmin.layerName')}:</strong> {layer.layer_name}</p>}
                                    <p><strong>{t('mapAdmin.zIndex')}:</strong> {layer.z_index} | <strong>{t('mapAdmin.visible')}:</strong> {layer.visible ? t('common.yes') : t('common.no')}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="empty-state-small">{t('mapAdmin.noLayers')}</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">{t('mapAdmin.noGroups')}</div>
              )}
            </div>
          </div>
        )}

        {/* Map Form Modal */}
        {showMapForm && (
          <div className="modal-overlay" onClick={() => setShowMapForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{editingMap ? t('mapAdmin.editMap') : t('mapAdmin.createMap')}</h2>
              <form onSubmit={editingMap ? handleUpdateMap : handleCreateMap}>
                <div className="form-group">
                  <label>{t('mapAdmin.name')} *</label>
                  <input
                    type="text"
                    value={mapForm.name}
                    onChange={(e) => setMapForm({ ...mapForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.description')}</label>
                  <textarea
                    value={mapForm.description}
                    onChange={(e) => setMapForm({ ...mapForm, description: e.target.value })}
                    placeholder={t('mapAdmin.description')}
                    rows="3"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Longitude ({t('mapAdmin.center')}) *</label>
                    <input
                      type="number"
                      step="any"
                      value={mapForm.center.lng}
                      onChange={(e) => setMapForm({
                        ...mapForm,
                        center: { ...mapForm.center, lng: parseFloat(e.target.value) }
                      })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Latitude ({t('mapAdmin.center')}) *</label>
                    <input
                      type="number"
                      step="any"
                      value={mapForm.center.lat}
                      onChange={(e) => setMapForm({
                        ...mapForm,
                        center: { ...mapForm.center, lat: parseFloat(e.target.value) }
                      })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Zoom Level *</label>
                  <input
                    type="number"
                    min="1"
                    max="18"
                    value={mapForm.zoom}
                    onChange={(e) => setMapForm({ ...mapForm, zoom: parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={mapForm.is_public}
                      onChange={(e) => setMapForm({ ...mapForm, is_public: e.target.checked })}
                    />
                    {t('mapAdmin.public')}
                  </label>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowMapForm(false)}>
                    {t('common.cancel')}
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingMap ? t('common.save') : t('common.save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Group Form Modal */}
        {showGroupForm && (
          <div className="modal-overlay" onClick={() => setShowGroupForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{editingGroup ? 'Edit Layer Group' : 'Tambah Layer Group'}</h2>
              <form onSubmit={editingGroup ? handleUpdateGroup : handleCreateGroup}>
                <div className="form-group">
                  <label>{t('mapAdmin.name')} *</label>
                  <input
                    type="text"
                    value={groupForm.name}
                    onChange={(e) => setGroupForm({ ...groupForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.zIndex')}</label>
                  <input
                    type="number"
                    value={groupForm.z_index}
                    onChange={(e) => setGroupForm({ ...groupForm, z_index: parseInt(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={groupForm.is_basemap}
                      onChange={(e) => setGroupForm({ ...groupForm, is_basemap: e.target.checked })}
                    />
                    {t('maps.basemap')}
                  </label>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowGroupForm(false)}>
                    {t('common.cancel')}
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingGroup ? t('common.save') : t('common.save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Layer Form Modal */}
        {showLayerForm && (
          <div className="modal-overlay" onClick={() => setShowLayerForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{editingLayer ? t('mapAdmin.editLayer') : t('mapAdmin.createLayer')}</h2>
              <form onSubmit={editingLayer ? handleUpdateLayer : handleCreateLayer}>
                <div className="form-group">
                  <label>{t('mapAdmin.layerName')} *</label>
                  <input
                    type="text"
                    value={layerForm.name}
                    onChange={(e) => setLayerForm({ ...layerForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.layerType')} *</label>
                  <select
                    value={layerForm.type}
                    onChange={(e) => setLayerForm({ ...layerForm, type: e.target.value })}
                    required
                  >
                    <option value="wms">WMS</option>
                    <option value="wfs">WFS</option>
                    <option value="xyz">XYZ</option>
                    <option value="mvt">MVT</option>
                    <option value="geojson">GeoJSON</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.url')} *</label>
                  <input
                    type="text"
                    value={layerForm.url}
                    onChange={(e) => setLayerForm({ ...layerForm, url: e.target.value })}
                    required
                    placeholder="https://example.com/wms"
                  />
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.layerName')} (untuk WMS/WFS)</label>
                  <input
                    type="text"
                    value={layerForm.layer_name}
                    onChange={(e) => setLayerForm({ ...layerForm, layer_name: e.target.value })}
                    placeholder="layer_name"
                  />
                </div>
                <div className="form-group">
                  <label>{t('mapAdmin.style')}</label>
                  <textarea
                    value={layerForm.style}
                    onChange={(e) => setLayerForm({ ...layerForm, style: e.target.value })}
                    placeholder='{"color": "#3388ff", "weight": 2}'
                    rows="3"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('mapAdmin.zIndex')}</label>
                    <input
                      type="number"
                      value={layerForm.z_index}
                      onChange={(e) => setLayerForm({ ...layerForm, z_index: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={layerForm.visible}
                        onChange={(e) => setLayerForm({ ...layerForm, visible: e.target.checked })}
                      />
                      {t('mapAdmin.visible')}
                    </label>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowLayerForm(false)}>
                    {t('common.cancel')}
                  </button>
                  <button type="submit" className="btn-primary">
                    {t('common.save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MapAdmin;

